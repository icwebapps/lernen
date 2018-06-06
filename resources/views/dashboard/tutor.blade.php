@extends('layout')

@section('title', 'Dashboard')

@section('content')

@component('sidebar', ['selected' => 'dashboard'])
@endcomponent


<div class="main">

  <div class="header">
    <div class="header-left">
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

</div>

@endsection