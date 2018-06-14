@extends('layout')

@if (Auth::user()->isTutor())
  @php ($title = 'Students')
@else
  @php ($title = 'Tutors')
@endif

@section('title', $title)

@section('content')

@component('header')
  @slot('title') {{ $title }} @endslot
@endcomponent


<div id="contacts-widget"
     class="main"
     data-page="contacts"
     data-talkingtoid="{{ $talkingToId }}"
     data-userid="{{ Auth::user()->id }}"
     data-istutor="{{ Auth::user()->isTutor() }}">
</div>
@endsection