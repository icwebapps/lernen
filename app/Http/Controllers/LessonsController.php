<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\{Lesson};
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
    return json_encode(["status" => 1]);
  }

}