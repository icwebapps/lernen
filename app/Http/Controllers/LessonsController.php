<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\{Lesson, Notification, Subject};
use Illuminate\Support\Facades\Auth;

class LessonsController
{
  public function create(Request $request)
  {
    Lesson::create([
      'student_id' => $request->input('student_id'),
      'tutor_id' => Auth::user()->tutor->user_id,
      'date' => $request->input('date'),
      'time' => $request->input('time'),
      'location' => $request->input('location'),
      'subject_id' => $request->input('subject_id')
    ]);
    $subject = Subject::find($request->input('subject_id'));
    $notification = Auth::user()->name . " scheduled a lesson for {$subject->full} on " . 
                    date('jS F', strtotime($request->input('date'))) . " at " . date('h:iA', strtotime($request->input('time')));
    Notification::create([
      'user_id' => $request->input('student_id'),
      'message' => $notification,
      'url' => '/calendar'
    ]);
    return ["status" => 1];
  }

  public function list() {
      
    $todayDate = date("Y-m-d", strtotime("now"));
    $lessons = Auth::user()->isTutor() ? Auth::user()->tutor->lessons : Auth::user()->student->lessons;

    $lessons->load(['student.user', 'tutor.user']);
    return [ "lessons" => $lessons, "today" => $todayDate];

  }
  

}