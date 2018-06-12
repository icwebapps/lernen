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
      <div class="dashboard-header-item">Lessons</div>
    </div>
    <div class="dashboard-panels">
      <div class="dashboard-panel-item dashboard-item-long">
        <div class="subject-performance rating-excellent">
          <div class="subject-performance-name">Chemistry</div>
          <div class="circle over50 subject-performance-circle">
            <span>95%</span>
            <div class="slice">
              <div class="bar" style="transform: rotate(342deg);"></div>
              <div class="fill"></div>
            </div>
          </div>
          <div class="subject-performance-caption">
            Performance:
            <div class="subject-performance-rating">Excellent</div>
          </div>
        </div>
        <div class="subject-performance rating-ok">
          <div class="subject-performance-name">Mathematics</div>
          <div class="circle over50 subject-performance-circle">
            <span>65%</span>
            <div class="slice">
              <div class="bar" style="transform: rotate(234deg);"></div>
              <div class="fill"></div>
            </div>
          </div>
          <div class="subject-performance-caption">
            Performance:
            <div class="subject-performance-rating">OK</div>
          </div>
        </div>
        <div class="subject-performance rating-improvement">
          <div class="subject-performance-name">Further Mathematics</div>
          <div class="circle subject-performance-circle">
            <span>43%</span>
            <div class="slice">
              <div class="bar" style="transform: rotate(154deg);"></div>
              <div class="fill"></div>
            </div>
          </div>
          <div class="subject-performance-caption">
            Performance:
            <div class="subject-performance-rating">Improvement</div>
          </div>
        </div>
        <div class="subject-performance rating-good">
          <div class="subject-performance-name">Physics</div>
          <div class="circle over50 subject-performance-circle">
            <span>85%</span>
            <div class="slice">
              <div class="bar" style="transform: rotate(306deg);"></div>
              <div class="fill"></div>
            </div>
          </div>
          <div class="subject-performance-caption">
            Performance:
            <div class="subject-performance-rating">Good</div>
          </div>
        </div>
      </div>

      <div id="assignment-widget"></div>

      <div id="lesson-widget"></div>
      
</div>
@endsection
