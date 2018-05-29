<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
  function index()
  {
    return view('login');
  }

  function check_login(Request $request)
  {
    $this->validate($request, [
      'email' => 'required|email',
      'password' => 'required'
    ]);

    $user_data = [
      'email' => $request->get('email'),
      'password' => $request->get('password')
    ];

    if (Auth::attempt($user_data)) {
      return redirect('dashboard');
    }
    else {
      return back()->with('error', 'Incorrect login details');
    }
  }
}
