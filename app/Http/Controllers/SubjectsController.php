<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\{Subject};

class SubjectsController extends Controller
{
  public function create(Request $request) 
  {
    $subject = Subject::create([
      'name' => $request->input('name'),
      'level' => $request->input('level'),
    ]);
    return json_encode(["status" => 1]);
  }
}
