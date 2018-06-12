<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;



use App\{
  Assignment, Submission
};

class SubmissionsController
{
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