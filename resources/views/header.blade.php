<div class="header">
  <div class="header-left">
    <div class="header-icon">
      <a href="/"><img class="logo-icon" src="/images/icon.png" /></a>
    </div>
    <div class="header-text">
      <div class="page-title">{{ $title }}</div>
      <div class="header-tabs">
        {{ $slot }}
      </div>
      {{ $text ?? '' }}
    </div>
  </div>
  <div class="header-center">
    <a href="/"><img src="/images/logo.png" class="logo" /></a>
  </div>
  <div class="header-right">
    <div class="header-logout"><a href="/logout"><img src="/images/icons8-shutdown-50.png" /></a></div>
  </div>
</div>