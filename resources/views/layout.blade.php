<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,800" rel="stylesheet" />
    <link rel="stylesheet" href="/css/style.css" />
    <title>@yield('title') | Lernen</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
  </head>
  <body>
    <div class="site">
      @yield('content')
    </div>
    <script src="{{ asset('js/app.js') }}" ></script>
  </body>
</html>