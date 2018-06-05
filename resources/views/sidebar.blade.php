<div class="sidebar">
  <img class="logo-icon" src="/images/icon.png" />
  <div class="nav">
    <div class="nav-item @if ($selected == "dashboard") nav-selected @endif">
      <a href="/dashboard"><img src="/images/icons8-dashboard-50.png" /></a>
    </div>
    <div class="nav-item @if ($selected == "calendar") nav-selected @endif">
      <a href="/calendar"><img src="/images/icons8-today-100.png" /></a>
    </div>
    <div class="nav-item @if ($selected == "contacts") nav-selected @endif">
      <a href="/contacts"><img src="/images/icons8-address-book-2-filled-100.png" /></a>
    </div>
    <div class="nav-item @if ($selected == "account") nav-selected @endif">
      <a href="/account"><img src="/images/icons8-male-user-50.png" /></a>
    </div>
  </div>
</div>