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
      return;
    }
  }

  public function list()
  {
    if (Auth::user()->isTutor()) {
      $resources = User::with('tutor.resources.students')->find(Auth::user()->id)->tutor->resources;
      return json_encode([ "resources" => $resources]);
    }
    else {
      abort(404);
    }
  }


  public function store(Request $request)
  {
    if ($request->hasfile('filename'))
    {
      $file = $request->filename;
      $name = $file->getClientOriginalName();
      Storage::disk('s3')->put('resources/', $file, 'public');
      return back();
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
      $resource = new Resource;
      $resource->name = $request->filename;
      $resource->move(public_path().'/tmp_resources', $resource->name);
      $resource->save();

      return back();
    }
  }*/

}
