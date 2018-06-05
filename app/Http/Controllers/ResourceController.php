<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ResourceController extends Controller
{
  public function index() 
  {
    if (Auth::user()->isTutor()) {
       return view('resources');
    }
    else {
      return;
    }
  }

  public function list()
  {
    if (Auth::user()->isTutor()) {
      $resources = Auth::user()->tutor->resources;
      return json_encode([ "resources" => $resources]);
    }
    else {
      abort(404);
    }
  }

/*
  public function store(Request $request)
  {
    $this->validate($request, [

      'filename' => 'required',
      'filename.*' => 'mimes:pdf'

    ]);

    if ($request->hasfile('filename'))
    {
      $name = $file->getClientOriginalName();
      $file->move(public_path().'/resources', $name);
      $resource = new Resource();
      $resource->filename = $name;
      $resource->save();

      return back()->with('success', 'Your files has been successfully added');
    }
  }
  */

}
