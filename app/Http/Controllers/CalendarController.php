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
    $numDays = cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
    $weeksToShow = 5;

    $events = [];
    $lessons = Auth::user()->tutor->lessons;
    foreach ($lessons as $l) {
      $events[] = [
        'date' => date('j', strtotime($l->date)),
        'month' => date('m', strtotime($l->date)),
        'student' => $l->student->user->name,
        'location' => $l->location,
        'subject' => $l->subject
      ];
    }

    return json_encode([
      'events' => $events,
      'start' => $startDate,
      'numDays' => $numDays,
      'weeksToShow' => $weeksToShow
    ]);

  }
}