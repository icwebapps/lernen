<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\{
  User
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

    return [
      'tasks' => $tasks
    ];
  }



}
