@extends('layout')

@section('title', 'Resources')

@section('content')

@component('sidebar', ['selected' => 'resources'])
@endcomponent

<div class="main">
  @component('header')
    @slot('title') Resources @endslot
  @endcomponent

  <div class="width-fill" id="resources-widget">
  </div>
</div>
  
@endsection