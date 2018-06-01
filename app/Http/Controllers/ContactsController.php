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

  
}
