<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

class DashboardController
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

}