@extends('layout')

@section('title', 'Dashboard')

@section('content')

<div class="header">
  <div class="header-left">
    <div class="header-icon">
      <img class="logo-icon" src="/images/icon.png" />
    </div>
    <div class="page-title">Dashboard</div>
    <div class="page-title page-dark">Welcome {{ explode(" ", Auth::user()->name)[0] }}</div>
  </div>
  <div class="header-center">
    <img src="/images/logo.png" class="logo" />
  </div>
  <div class="header-right">
    <div class="header-logout"><a href="/logout"><img src="/images/icons8-shutdown-50.png" /></a></div>
  </div>
</div>

<div class="main">
  @component('sidebar', ['selected' => 'dashboard'])
  @endcomponent

</div>

@endsection