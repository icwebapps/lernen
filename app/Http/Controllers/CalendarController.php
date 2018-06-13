<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
  public function index()
  {
    return view('calendar');
  }

  public function events()
  {
    $startDate = date("Y-m-d", strtotime("previous monday"));
    $todayDate = date("Y-m-d", strtotime("now"));
    $weeksToShow = 5;

    $events = [];
    if (Auth::user()->isTutor()) {
      $lessons = Auth::user()->tutor->lessons;
    }
    else {
      $lessons = Auth::user()->student->lessons;
    }

    foreach ($lessons as $l) {
      $events[] = [
        'date' => date('j', strtotime($l->date)),
        'month' => date('m', strtotime($l->date)),
        'monthFormat' => date('F', strtotime($l->date)),
        'year' => date('Y', strtotime($l->date)),
        'time' => $l->time,
        'student' => $l->student->user,
        'tutor' => $l->tutor->user,
        'location' => $l->location,
        'subject' => $l->subject
      ];
    }

    return json_encode([
      'events' => $events,
      'start' => $startDate,
      'today' => $todayDate,
      'weeksToShow' => $weeksToShow
    ]);

  }
}
