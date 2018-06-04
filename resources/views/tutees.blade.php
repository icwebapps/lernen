@extends('layout')

@section('title', 'Tutees')

@section('content')

@component('sidebar', ['selected' => 'contacts'])
@endcomponent

<div class="main">

  @component('header')
    @slot('title') Tutees @endslot
      <div class="header-tab-item tab-selected">Alphabetically</div>
      <div class="header-tab-item">Recent</div>
  @endcomponent

  <div class="width-fill">
    <div id="listing-widget"></div>
  </div>
</div>
</div>
@endsection