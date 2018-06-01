@extends('layout')

@section('title', 'Tutees')

@section('content')

@component('sidebar')
@endcomponent

<div class="main">
  <div class="header">
    <div class="header-left">
      <div class="page-title">Tutees</div>
      <div class="header-tabs">
        <div class="header-tab-item tab-selected">Alphabetically</div>
        <div class="header-tab-item">Recent</div>
      </div>
    </div>
    <div class="header-center">
      <img src="/images/logo.png" class="logo" />
    </div>
    <div class="header-right">
      <div class="header-logout"><img src="/images/icons8-shutdown-50.png" /></div>
    </div>
  </div>
  <div class="width-fill">
    
  </div>
</div>
</div>
@endsection