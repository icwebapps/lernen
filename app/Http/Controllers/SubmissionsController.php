<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\{
  Assignment, Submission
};

class SubmissionsController
{
  public function progress()
  {
    $submissions = [];
    $assignments = Auth::user()->student->assignments;
    // Get all submissions, sum up grades and store per subject_id
    foreach ($assignments as $a) {
      if (count($a->submissions) > 0) {
        $recent_submission = $a->submissions->last();
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
      
    return json_encode(["subjects" => $subjects]);
  }

  public function store(Request $request)
  {
    $file = $request->file;
    $storagePath = Storage::disk('s3')->put('submissions', $file, 'public');
    $submission = new Submission;
    $submission->url = 'http://' .  env('AWS_BUCKET') . '/'. $storagePath;
    $submission->assignment_id = $request->assignment_id;
    $submission->grade = 0;
    $submission->feedback = "";
    $submission->save();

    $assignment = Assignment::find($request->assignment_id);
    $assignment->completed = true;
    $assignment->save();
    return json_encode(["status" => 1]);
  }

}