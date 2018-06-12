<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\{
  Assignment, Submission, User
};


class AssignmentsController extends Controller
{

  public function list(Request $request)
  {
    $tasks = [];

    if (!is_null($request->completed)) {
      $query = User::with(['student.assignments' => function ($q) use ($request) {
        $q->where('completed', $request->completed);
      }])->find(Auth::user()->id);
    }
    else {
      $query = Auth::user();
    }

    $assignments = $query->student->assignments;

    foreach ($assignments as $a) {
      $tasks[] = [
        'title' => $a->title,
        'due' => $a->date_due,
        'completed' => $a->completed,
        'url' => $a->resource->url,
        'assignment_id' => $a->id
      ];
    }

    return json_encode([
      'tasks' => $tasks
    ]);
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
