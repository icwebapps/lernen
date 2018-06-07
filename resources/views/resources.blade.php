@extends('layout')

@section('title', 'Resources')

@section('content')

@component('sidebar', ['selected' => 'resources'])
@endcomponent

<div class="main">
  @component('header')
    @slot('title') Resources @endslot
  @endcomponent

  <div class="width-fill">
    <div class="panel-subjects">
      <div class="add-subject">
        <div class="add-subject-title">Add Subject</div>
        <img src="/images/icons8-plus-math-50.png" class="add-subject-button" />
      </div>
      <div class="subject-list">
        <div class="subject-list-headers">
          <div class="subject-list-header-item header-subject">Subject</div>
          <div class="subject-list-header-item header-level">Level</div>
          <div class="subject-list-header-item header-files">Files</div>
        </div>
        <div class="subject-list-item">
          <div class="subject-list-letter letter-green">M</div>
          <div class="subject-list-name">Mathematics</div>
          <div class="subject-list-level">GCSE</div>
          <div class="subject-list-files">12</div>
        </div>
        <div class="subject-list-item item-selected">
          <div class="subject-list-letter letter-red">F</div>
          <div class="subject-list-name">Further Mathematics</div>
          <div class="subject-list-level">A-Level</div>
          <div class="subject-list-files">9</div>
        </div>
        <div class="subject-list-item">
          <div class="subject-list-letter letter-blue">C</div>
          <div class="subject-list-name">Chemistry</div>
          <div class="subject-list-level">GCSE</div>
          <div class="subject-list-files">1</div>
        </div>
        <div class="subject-list-item">
          <div class="subject-list-letter letter-purple">M</div>
          <div class="subject-list-name">Mathematics</div>
          <div class="subject-list-level">11+</div>
          <div class="subject-list-files">0</div>
        </div>
      </div>
    </div>

    <div class="panel-resources" id="resources-widget">
      <form method="post" action="{{url('resources')}}" enctype="multipart/form-data">
        {{csrf_field()}}
        <input type="file" name="filename">          
        <input type="submit" value="Add Resource" class="add-resource">
      </form>
    </div>
  </div>
</div>
  
@endsection