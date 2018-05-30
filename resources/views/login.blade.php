@extends('layout')

@section('title', 'Log in')

@section('content')
  <div class="main">

    <div class="header header-extended">
      <div class="header-left">
        &nbsp;
      </div>
      <div class="header-center">
        <img src="/images/logo.png" class="logo" />
      </div>
      <div class="header-right">
        &nbsp;
      </div>
    </div>

    <div class="width-fill">
      <div class="login-container">
        <div class="login-form">
          <form method="post" action="/login">
            {{ csrf_field() }}
            <input type="text" placeholder="Email address" /> 
            <input type="password" placeholder="Password" />
            <input type="button" value="Log in" />
          </form>
        </div>

        @if (count($errors) > 0)
          @foreach ($errors->all() as $error)
            {{ $error }}
          @endforeach
        @endif

        @if ($message = Session::get('error'))
        {{ $message }}
        @endif
      </div>
    </div>
    
  </div>
  @endsection