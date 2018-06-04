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
}
