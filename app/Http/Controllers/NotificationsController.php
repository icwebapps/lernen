<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationsController extends Controller
{
  public function index($type)
  {
    $notifications = Auth::user()->notifications();
    if ($type == "unread") {
      $notifications = $notifications->unread()->get();
    }
    else if ($type == "all") {
      $notifications = $notifications->get();      
    }
    else {
      abort(404);
    }

    return [
      'notifications' => $notifications
    ];
  }
}
