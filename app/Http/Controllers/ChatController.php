<?php

namespace App\Http\Controllers;
use App\Message, Illuminate\Support\Facades\Auth;
use App\Events\MessageSent;
use Illuminate\Http\Request;

class ChatController extends Controller
{
  public function fetch()
  {
    $user = Auth::user();
    
    if ($user->isTutor()) {
      return Message::where('tutor_id', $user->id)->with('student.user')->get();
    }
    else {
      return Message::where('student_id', $user->id)->with('tutor.user')->get();
    }
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
  
    broadcast(new MessageSent($user, $message))->toOthers();
    return ['status' => 1];
  }
}
