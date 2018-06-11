<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\{User, Assignment, Subject, Resource};

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
      $resources = User::with([
        'tutor.resources.assignments.student.user',
        'tutor.resources.subject'
      ])->find(Auth::user()->id)->tutor->resources;
      return json_encode([ "resources" => $resources ]);
    }
    else {
      abort(404);
    }
  }

  public function store(Request $request)
  {
    $file = $request->file;
    $storagePath = Storage::disk('s3')->put('resources', $file, 'public');
    $resource = new Resource;
    $resource->url = 'http://' .  env('AWS_BUCKET') . '/'. $storagePath;
    $path = pathinfo($file->getClientOriginalName());
    $resource->name = $path['filename'];
    $resource->subject_id = $request->subject_id;
    $resource->tutor_id = Auth::user()->id;
    $resource->save();
    return json_encode(["status" => 1, "type" => $resource->type]);
  }

  public function add_student(Request $request, $resourceId) 
  {
    $assignment = new Assignment([
      'student_id' => $request->input('student_id'),
      'subject_id' => $request->subject_id,
      'date_set' => date('Y-m-d'),
      'date_due' => $request->due_date,
      'resource_id' => $resourceId,
      'title' => $request->assignment_name
    ]);
    
    $assignment->save();
    return json_encode(["status" => 1]);
  }
}
