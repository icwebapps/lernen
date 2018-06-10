<div class="header">
  <div class="header-left">
    <div class="header-icon">
      <img class="logo-icon" src="/images/icon.png" />
    </div>
    <div class="header-text">
      <div class="page-title">{{ $title }}</div>
      <div class="header-tabs">
        {{ $slot }}
      </div>
    </div>
  </div>
  <div class="header-center">
    <img src="/images/logo.png" class="logo" />
  </div>
  <div class="header-right">
    <div class="header-logout"><a href="/logout"><img src="/images/icons8-shutdown-50.png" /></a></div>
  </div>
</div>