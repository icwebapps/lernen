<?php

namespace App\Http\Controllers;

use App\Resource;
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
    $storagePath = Storage::disk('s3')->put('resources/', $file, 'public');
    $url = Storage::url($file);
    $storageName = basename($storagePath);
    $resource = new resource;
    $resource->url = $url;
    $resource->name = $storageName;
    $resource->tutor_id = Auth::user()->id;
    $resource->save();
    return json_encode(["status" => 1]);
  }
}
