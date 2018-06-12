@extends('layout')

@section('title', 'Calendar')

@section('content')

@component('header')
  @slot('title') Schedule @endslot
    <a href="/upcoming" style="text-decoration:none;"><div class="header-tab-item">Upcoming</div></a>
    <div class="header-tab-item tab-selected">Calendar</div>
@endcomponent

<div class="main">
  @component('sidebar', ['selected' => 'calendar'])
  @endcomponent
  
  <div class="width-fill flex-rows">
    <div id="calendar-widget">
    </div>

    <div class="calendar-manage">
      <div class="calendar-setting">
        <img src="/images/icons8-plus-50.png" /> Add Lesson
      </div>
      <div class="calendar-setting">
        <img src="/images/icons8-search-50.png" /> Search
      </div>
    </div>
  </div>
</div>
</div>

@endsection