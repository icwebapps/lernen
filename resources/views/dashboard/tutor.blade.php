@extends('layout')

@section('title', 'Dashboard')

@section('content')

@component('header')
  @slot('title') Dashboard @endslot
  @slot('text') <div class="page-title page-dark">Welcome {{ explode(" ", Auth::user()->name)[0] }}</div> @endslot
@endcomponent

<div id="dashboard-tutor-widget"
     class="main"
     data-page="dashboard"
     data-userid="{{ Auth::user()->id }}"
     data-istutor="{{ Auth::user()->isTutor() }}">
</div>
@endsection