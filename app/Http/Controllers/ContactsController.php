<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
  public function index($talkingToId = null)
  {
    return view('contacts', [ 'talkingToId' => $talkingToId ]);
  }

  public function list()
  {
    if (Auth::user()->isTutor()) {
      $students = [];
      $lessons = Auth::user()->tutor->lessons;
      foreach ($lessons as $l) {
        $thisStudent = $l->student->user;
        $students[$thisStudent->id] = $thisStudent;
      }
      return json_encode([ "contacts" => array_values($students) ]);
    }
    else {
      $tutors = [];
      $lessons = Auth::user()->student->lessons;
      foreach ($lessons as $l) {
        $thisTutor = $l->tutor->user;
        $tutors[$thisTutor->id] = $thisTutor;
      }
      return json_encode([ "contacts" => array_values($tutors) ]);
    }
  }
}
