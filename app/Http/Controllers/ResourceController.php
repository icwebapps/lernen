<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\User;

class ResourceController extends Controller
{
  public function index() 
  {
    if (Auth::user()->isTutor()) {
       return view('resources');
    }
    else {
      abort(404);
    }
  }

  public function list()
  {
    if (Auth::user()->isTutor()) {
      $resources = User::with('tutor.resources.students.user')->find(Auth::user()->id)->tutor->resources;
      return json_encode([ "resources" => $resources ]);
    }
    else {
      abort(404);
    }
  }


  public function store(Request $request)
  {
    $file = $request->file;
    Storage::disk('s3')->put('resources/', $file, 'public');
    return json_encode(["status" => 1]);
  }
}
