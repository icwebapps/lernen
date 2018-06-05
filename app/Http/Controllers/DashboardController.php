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
    $events = [];
    $assignments = Auth::user()->student->assignments;
    foreach ($assignments as $a)
    {
      $events[] = [
          'assignment' => $a->student,
          'due' => $a->date_due,
          'completed' => $a->completed
          ];
    }

    return json_encode([
        'events' => $events
    ]);
  }
}
