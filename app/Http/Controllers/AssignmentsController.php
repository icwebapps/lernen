<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class AssignmentsController extends Controller
{

  public function assignments()
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
}
