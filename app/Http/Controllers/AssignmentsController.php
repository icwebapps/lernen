<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class AssignmentsController extends Controller
{

  public function list()
  {
    $tasks = [];
    $assignments = Auth::user()->student->assignments;

    foreach ($assignments as $a) {
      $tasks[] = [
        'title' => $a->title,
        'due' => $a->date_due,
        'completed' => $a->completed,
        'url' => $a->resource->url
      ];
    }

    return json_encode([
      'tasks' => $tasks
    ]);
  }


  public function store(Request $request)
  {
    $file = $request->file;
    $storagePath = Storage::disk('s3')->put('student-solutions', $file, 'public');
    $resource = new Resource;
    $resource->url = 'http://' .  env('AWS_BUCKET') . '/'. $storagePath;
    $path = pathinfo($file->getClientOriginalName());
    $resource->name = $path['filename'];
    $resource->subject_id = $request->subject_id;
    $resource->tutor_id = Auth::user()->id;
    $resource->save();
    return json_encode(["status" => 1, "type" => $resource->type]);
  }
}
