<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\{
  User, Resource, Assignment, Submission, Notification
};

class SubmissionsController
{
  public function index()
  {
    return view('submissions');
  }

  public function progress()
  {
    $submissions = [];
    $assignments = Auth::user()->student->assignments;
    // Get all submissions, sum up grades and store per subject_id
    foreach ($assignments as $a) {
      $thisSubs = $a->submissions->filter(function ($sub) {
        return !is_null($sub->grade);
      });
      if (count($thisSubs) > 0) {
        $recent_submission = $thisSubs->last();
        $submissions[$a->subject_id] = [
          'count' => ($submissions[$a->subject_id]['count'] ?? 0) + 1,
          'total' => ($submissions[$a->subject_id]['total'] ?? 0) + $recent_submission->grade
        ];
      }
    }
    // Get all the subjects taken by student and merge in progress stats
    $subjects = Auth::user()->student->lessons->map(function ($lesson) {
      return $lesson->subject;
    })->map(function ($subject) use ($submissions) {
      $subject->progress = $submissions[$subject->id] ?? ['count' => 0, 'total' => 0];
      return $subject;
    });

    return ["subjects" => $subjects];
  }

  public function list()
  {
    if (Auth::user()->isTutor()) {
      $resources = Auth::user()->tutor->resources;

      $submissions = [];

      foreach ($resources as $r) {
        $assignments = $r->load('assignments.submissions')->assignments;
        foreach ($assignments as $a) {
          $submissions = array_merge($submissions, $a->submissions->where('grade', null)->load('assignment')->all());
        }
      }
      return [ "submissions" => $submissions ];
    }
    else {
      abort(404);
    }

  }

  public function store(Request $request)
  {
    $file = $request->file;
    $storagePath = Storage::disk('s3')->put('submissions', $file, 'public');
    $submission = new Submission;
    $submission->url = 'http://' .  env('AWS_BUCKET') . '/'. $storagePath;
    $submission->assignment_id = $request->assignment_id;
    $submission->feedback = "";
    $submission->save();

    $assignment = Assignment::find($request->assignment_id);
    $assignment->completed = true;
    $assignment->save();

    Notification::create([
      'user_id' => $assignment->resource->tutor->user_id,
      'message' => Auth::user()->name . " has submitted " . $assignment->title . " for you to grade",
      'url' => '/dashboard'
    ]);
    return ["status" => 1];
  }

  public function feedback(Request $request)
  {
    $submission = Submission::find($request->submission_id);
    $submission->grade = $request->grade;
    $submission->feedback = $request->feedback;
    $submission->save();
    return json_encode(["status" => 1]);
  }

}