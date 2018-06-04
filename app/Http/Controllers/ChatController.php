<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
  public function fetch()
  {
    return Message::with('user')->get();
  }

  public function send(Request $request)
  {
    $user = Auth::user();
    
    if ($user->isTutor()) {
      $message = $user->tutor->messages()->create([
        'message' => $request->input('message'),
        'student_id' => $request->input('student_id')
      ]);
    }
    else {
      $message = $user->student->messages()->create([
        'message' => $request->input('message'),
        'tutor_id' => $request->input('tutor_id')
      ]);
    }
  
    return ['status' => 1];
  }
}
