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
        $thisStudent->unread = Auth::user()->tutor->messages()->where('student_id', $thisStudent->id)->studentSent()->unread()->count();
        $students[$thisStudent->id] = $thisStudent;
      }
      $students = array_values($students);
      usort($students, [$this, 'sortAlphaByName']);
      return [ "contacts" => $students ];
    }
    else {
      $tutors = [];
      $lessons = Auth::user()->student->lessons;
      foreach ($lessons as $l) {
        $thisTutor = $l->tutor->user;
        $thisTutor->unread = Auth::user()->student->messages()->where('tutor_id', $thisTutor->id)->tutorSent()->unread()->count();
        $tutors[$thisTutor->id] = $thisTutor;
      }
      $tutors = array_values($tutors);
      usort($tutors, [$this, 'sortAlphaByName']);
      return [ "contacts" => $tutors ];
    }
  }

  private function sortAlphaByName($a, $b)
  {
    $a = $a['name'];
    $b = $b['name'];

    if ($a == $b) return 0;
    return ($a < $b) ? -1 : 1;
  }
}
