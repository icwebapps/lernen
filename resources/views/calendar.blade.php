@extends('layout')

@section('title', 'Calendar')

@section('content')

@component('sidebar')
@endcomponent

<div class="main">
  <div class="header">
    <div class="header-left">
      <div class="page-title">Schedule</div>
      <div class="header-tabs">
        <div class="header-tab-item">Upcoming</div>
        <div class="header-tab-item tab-selected">Calendar</div>
      </div>
    </div>
    <div class="header-center">
      <img src="/images/logo.png" class="logo" />
    </div>
    <div class="header-right">
      <div class="header-logout"><img src="/images/icons8-shutdown-50.png" /></div>
    </div>
  </div>
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

<div class="overlay overlay-date" style="display:none">
  <div class="overlay-title">9 April 2018</div>
  <div class="overlay-content">
    <div class="overlay-item accent-red">
      <a class="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
      </svg></a>
      <div class="overlay-indent">
        <div class="overlay-item-title">Jason Lipowicz</div>
        <div class="overlay-item-sub">11:00AM to 12:00PM</div>
        <div class="overlay-item-description">1 Hacker Way, London<br />GCSE Maths / Further Maths</div>
      </div>
    </div>
    <div class="overlay-item accent-blue">
      <a class="key-colour accent-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
      </svg></a>
      <div class="overlay-indent">
        <div class="overlay-item-title">Alexandr Zakon</div>
        <div class="overlay-item-sub">3:00PM to 4:00PM</div>
        <div class="overlay-item-description">1 Hacker Way, London<br />Chemistry A-level</div>
      </div>
    </div>
  </div>
</div>
@endsection