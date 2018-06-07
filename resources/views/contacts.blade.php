@extends('layout')

@if (Auth::user()->isTutor())
  @php ($title = 'Students')
@else
  @php ($title = 'Tutors')
@endif

@section('title', $title)

@section('content')

@component('sidebar', ['selected' => 'contacts'])
@endcomponent

<div class="main">

  @component('header')
    @slot('title') {{ $title }} @endslot
      <div class="header-tab-item tab-selected">Alphabetically</div>
      <div class="header-tab-item">Recent</div>
  @endcomponent

  <div class="width-fill">
    <div id="contacts-widget" data-talkingtoid="{{ $talkingToId }}" data-userid="{{ Auth::user()->id }}" data-istutor="{{ Auth::user()->isTutor() }}"></div>
  </div>
</div>
</div>
@endsection