@extends('layout')

@section('title', 'Upcoming')

@section('content')

@component('header')
  @slot('title') Submissions @endslot
  @endcomponent

<div class="main"
     id="submissions-widget"
     data-page="submissions"
     data-userid="{{ Auth::user()->id }}"
     data-istutor="{{ Auth::user()->isTutor() }}">
</div>

@endsection