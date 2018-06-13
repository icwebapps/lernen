@extends('layout')

@section('title', 'Calendar')

@section('content')

@component('header')
  @slot('title') Schedule @endslot
    <div class="header-tab-item tab-selected">Calendar</div>
    <a href="/upcoming" style="text-decoration:none;"><div class="header-tab-item">Upcoming</div></a>
@endcomponent

<div class="main">
  @component('sidebar', ['selected' => 'calendar'])
  @endcomponent
  
  <div class="width-fill flex-rows">
    <div id="calendar-widget">
    </div>
  </div>
</div>
</div>

@endsection