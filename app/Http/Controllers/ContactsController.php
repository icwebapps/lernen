<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
  public function index()
  {
    if (Auth::user()->isTutor()) {
      return view('tutees');
    }
    else {
      return;
    }
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
  }
}
