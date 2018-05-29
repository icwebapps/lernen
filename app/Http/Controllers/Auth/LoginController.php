<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
  public function index()
  {
    if (Auth::user())
    {
      return redirect('/dashboard');
    }
    return view('login');
  }

  public function check_login(Request $request)
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

  public function logout()
  {
    Auth::logout();
    return redirect('/');
  }
}
