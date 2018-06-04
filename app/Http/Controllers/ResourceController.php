<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResourceController extends Controller
{
  public function index() 
  {
    return view('resources');
  }

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

}
