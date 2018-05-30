<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Lernen</title>
      </head>
      <body>
        <p>Login.</p>
        <form method="post" action="/login">
          {{ csrf_field() }}
        <input type="text" name="email" value="" placeholder="example@email.com"/>
        <input type="password" name="password" value="" />
        <input type="submit" name="submit" value="Login">
      </form>

      @if (count($errors) > 0)
        @foreach ($errors->all() as $error)
          {{ $error }}
        @endforeach
      @endif

      @if ($message = Session::get('error'))
      {{ $message }}
      @endif
    </body>
</html>
