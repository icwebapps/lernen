@extends('layout')

@section('title', 'Resources')

@section('content')

@component('sidebar', ['selected' => 'resources'])
@endcomponent

<div class="main">
  @component('header')
    @slot('title') Resources @endslot
  @endcomponent

<<<<<<< Updated upstream
  <div class="width-fill">
    <div class="panel-subjects">
      <div class="add-subject">
        <div class="add-subject-title">Add Subject</div>
        <img src="/images/icons8-plus-math-50.png" class="add-subject-button" />
      </div>
      
      <div class="subject-list">
        <div id="subject-widget">
        </div>
      </div>


    </div>

    <div class="panel-resources" id="resources-widget">
    </div>
=======
  <div class="width-fill" id="resources-widget">
>>>>>>> Stashed changes
  </div>
</div>
  
@endsection