<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UpcomingController extends Controller
{
    public function index()
    {
      return view('upcoming');
    }
}