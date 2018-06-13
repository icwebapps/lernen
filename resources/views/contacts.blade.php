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


<div class="main">
  @component('sidebar', ['selected' => 'contacts'])
  @endcomponent

  <div class="width-fill">
    <div id="contacts-widget" data-talkingtoid="{{ $talkingToId }}" data-userid="{{ Auth::user()->id }}" data-istutor="{{ Auth::user()->isTutor() }}"></div>
  </div>
</div>
</div>
@endsection