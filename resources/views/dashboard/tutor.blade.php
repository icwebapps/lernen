@extends('layout')

@section('title', 'Dashboard')

@section('content')

@component('header')
  @slot('title') Dashboard @endslot
  @slot('text') <div class="page-title page-dark">Welcome {{ explode(" ", Auth::user()->name)[0] }}</div> @endslot
@endcomponent

<div class="main">
  @component('sidebar', ['selected' => 'dashboard'])
  @endcomponent

</div>

@endsection