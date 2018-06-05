<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
  public function index()
  {
    if (Auth::user()->isTutor()) {
      return view('dashboard.tutor');
    }
    else {
      return view('dashboard.student');
    }
  }

  public function assignments()
  {
    $tasks = [];
    $assignments = Auth::user()->student->assignments->with('resource')->get();

    foreach ($assignments as $a) {
      $tasks[] = [
        'title' => $a->title,
        'due' => $a->date_due,
        'completed' => $a->completed,
        'url' => $a >url //set up relation between resource and assignment (assignment model)
      ];
    }

    return json_encode([
      'events' => $tasks
    ]);
  }
}
