@extends('layout')

@section('title', 'Dashboard')

@section('content')

@component('header')
  @slot('title') Dashboard @endslot
  @slot('text') <div class="page-title page-dark">Welcome {{ explode(" ", Auth::user()->name)[0] }}</div> @endslot
@endcomponent

<div class="main">
  @component('sidebar', ["selected"=>"dashboard"])
  @endcomponent
  
  <div class="width-fill flex-rows">
    <div class="dashboard-headers">
      <div class="dashboard-header-item dashboard-item-long">Progress</div>
      <div class="dashboard-header-item">Assignments</div>
      <div class="dashboard-header-item">Today's Lessons</div>
    </div>
    <div class="dashboard-panels">
      <div class="dashboard-panel-item dashboard-item-long" id="progress-widget">
      </div>

      <div id="assignment-widget"></div>

      <div id="lesson-widget"></div>
      
</div>
@endsection
