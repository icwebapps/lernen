@extends('layout')

@section('title', 'Resources')

@section('content')

@component('header')
  @slot('title') Resources @endslot
@endcomponent

<div class="main"
     id="resources-widget"
     data-page="resources"
     data-userid="{{ Auth::user()->id }}"
     data-istutor="{{ Auth::user()->isTutor() }}">
</div>
  
@endsection