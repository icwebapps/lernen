<div class="header">
  <div class="header-left">
    <div class="page-title">{{ $title }}</div>
    <div class="header-tabs">
      {{ $slot }}
    </div>
  </div>
  <div class="header-center">
    <img src="/images/logo.png" class="logo" />
  </div>
  <div class="header-right">
    <div class="header-logout"><a href="/logout"><img src="/images/icons8-shutdown-50.png" /></a></div>
  </div>
</div>