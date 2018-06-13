@extends('layout')

@section('title', 'Calendar')

@section('content')

@component('header')
  @slot('title') Schedule @endslot
    <div class="header-tab-item tab-selected">Calendar</div>
    <a href="/upcoming" style="text-decoration:none;"><div class="header-tab-item">Upcoming</div></a>
@endcomponent

<div id="calendar-widget"
     class="main"
     data-page="calendar"
     data-userid="{{ Auth::user()->id }}"
     data-istutor="{{ Auth::user()->isTutor() }}">
</div>

@endsection