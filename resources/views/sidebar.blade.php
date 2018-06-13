<div class="sidebar">
  <div class="nav">
    <div class="nav-item @if ($selected == "dashboard") nav-selected @endif">
      <a href="/dashboard"><img src="/images/icons8-dashboard-50.png" /></a>
    </div>
    <div class="nav-item @if ($selected == "calendar") nav-selected @endif">
      <a href="/calendar"><img src="/images/icons8-today-100.png" /></a>
    </div>
    <div class="nav-item @if ($selected == "contacts") nav-selected @endif">
      <a href="/contacts"><img src="/images/icons8-address-book-2-filled-100.png" /></a>
      @if ($unread_messages > 0)
      <div class="sidebar-notification">
        {{ $unread_messages }}
      </div>
      @endif
    </div>
    @if (Auth::user()->isTutor())
    <div class="nav-item @if ($selected == "resources") nav-selected @endif">
      <a href="/resources"><img src="/images/icons8-open-50.png" /></a>
    </div>
    @endif
    <div class="nav-item @if ($selected == "account") nav-selected @endif">
      <a href="/account"><img src="/images/icons8-male-user-50.png" /></a>
    </div>
  </div>
</div>