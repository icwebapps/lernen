<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Auth;
use Closure;

class Notifications
{
  public function handle($request, Closure $next)
  {
    $unread = (Auth::user()->isTutor()) ?
    Auth::user()->tutor->messages()->studentSent()->unread()->count() :
    Auth::user()->student->messages()->tutorSent()->unread()->count();

    View::share('unread_messages', $unread);
    return $next($request);
  }
}
