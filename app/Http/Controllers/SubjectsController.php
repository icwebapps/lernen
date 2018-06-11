<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\{Subject};

class SubjectsController extends Controller
{
  public function list() 
  {
    if (Auth::user()->isTutor()) {
      return json_encode(['subjects' => Auth::user()->tutor->subjects ]);
    }
    else {
      abort(404);
    }
  }

  public function create(Request $request) 
  {
    $subject = Subject::create([
      'name' => $request->input('name'),
      'level' => $request->input('level'),
      'tutor_id' => Auth::user()->tutor->user_id
    ]);
    return json_encode(["status" => 1]);
  }
}
