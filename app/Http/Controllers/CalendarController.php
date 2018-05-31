<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
  public function index()
  {
    
    $startDate = date("Y-m-d", strtotime("previous monday"));
    $numDays = cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
    $weeksToShow = 5;

    $lessons = Auth::user()->tutor->lessons;

    return view('calendar');
  }
}
