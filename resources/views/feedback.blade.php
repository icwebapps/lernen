@extends('layout')

@section('title', 'Feedback')

@section('content')

@component('header')
  @slot('title') Feedback @endslot
@endcomponent

<div class="main"
     id="feedback-widget"
     data-page=""
     data-submissionid="{{ $submissionId }}"
     data-userid="{{ Auth::user()->id }}"
     data-istutor="{{ Auth::user()->isTutor() }}">
</div>
  
@endsection