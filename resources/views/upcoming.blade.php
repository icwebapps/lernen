@extends('layout')

@section('title', 'Upcoming')

@section('content')

@component('header')
  @slot('title') Schedule @endslot
    <a href="/calendar" style="text-decoration:none;"><div class="header-tab-item">Calendar</div><a>
    <div class="header-tab-item tab-selected">Upcoming</div>
  @endcomponent

<div class="main">

  @component('sidebar', ['selected' => 'calendar'])
  @endcomponent

  <div class="width-scrollable">
    <div id="upcoming-widget">
    </div>
  </div>

  <div class="footer">
      <div class="footer-left">
        <div class="calendar-key">
          <div class="key-item"><a class="key-colour accent-red">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
            </svg></a>Maths
          </div>
          <div class="key-item"><a class="key-colour accent-green">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
            </svg></a>Physics
          </div>
          <div class="key-item"><a class="key-colour accent-blue">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
            </svg></a>Chemistry
          </div>
        </div>
      </div>
    </div>
</div>

@endsection