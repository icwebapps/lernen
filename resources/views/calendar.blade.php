@extends('layout')

@section('title', 'Calendar')

@section('content')

@component('sidebar')
@endcomponent

<div class="main">
  <div class="header">
    <div class="header-left">
      <div class="page-title">Schedule</div>
      <div class="header-tabs">
        <div class="header-tab-item">Upcoming</div>
        <div class="header-tab-item tab-selected">Calendar</div>
      </div>
    </div>
    <div class="header-center">
      <img src="/images/logo.png" class="logo" />
    </div>
    <div class="header-right">
      <div class="header-logout"><img src="/images/icons8-shutdown-50.png" /></div>
    </div>
  </div>
  <div class="width-fill flex-rows">
    <div class="calendar-widget">
      <div class="calendar-days">
        <div class="calendar-day">Monday</div>
        <div class="calendar-day">Tuesday</div>
        <div class="calendar-day">Wednesday</div>
        <div class="calendar-day">Thursday</div>
        <div class="calendar-day">Friday</div>
        <div class="calendar-day">Saturday</div>
        <div class="calendar-day">Sunday</div>
      </div>

      <div class="calendar-grid">
        <div class="calendar-week">
          <div class="calendar-cell cell-empty">
            <div class="calendar-number">30</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">1</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">2</div>
          </div> 
          <div class="calendar-cell">
            <div class="calendar-number">3</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">4</div>
          </div>
          <div class="calendar-cell cell-event">
            <div class="calendar-number">5</div>
            <div class="calendar-events">
              <div class="event-item">
                  <a class="key-colour accent-green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Boaz Francis
              </div>
            </div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">6</div>
          </div>
        </div>
        <div class="calendar-week">
          <div class="calendar-cell">
            <div class="calendar-number">7</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">8</div>
          </div>
          <div class="calendar-cell cell-event">
            <div class="calendar-number">9</div>
            <div class="calendar-events">
              <div class="event-item">
                  <a class="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Jason Lipowicz
              </div>
              <div class="event-item">
                  <a class="key-colour accent-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Alexandr Zakon
              </div>
            </div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">10</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">11</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">12</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">13</div>
          </div>
        </div>
        <div class="calendar-week">
          <div class="calendar-cell">
            <div class="calendar-number">14</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">15</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">16</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">17</div>
          </div>
          <div class="calendar-cell cell-event">
            <div class="calendar-number">18</div>
            <div class="calendar-events">
              <div class="event-item">
                  <a class="key-colour accent-green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Boaz Francis
              </div>
              <div class="event-item">
                  <a class="key-colour accent-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Alexandr Zakon
              </div>
            </div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">19</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">20</div>
          </div>
        </div>
        <div class="calendar-week">
          <div class="calendar-cell cell-event">
            <div class="calendar-number">21</div>
            <div class="calendar-events">
              <div class="event-item">
                  <a class="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Jason Lipowicz
              </div>
              <div class="event-item">
                  <a class="key-colour accent-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Alexandr Zakon
              </div>
            </div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">22</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">23</div>
          </div>        
          <div class="calendar-cell">
            <div class="calendar-number">24</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">25</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">26</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">27</div>
          </div>
        </div>
        <div class="calendar-week">
          <div class="calendar-cell">
            <div class="calendar-number">28</div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">29</div>
          </div>
          <div class="calendar-cell cell-event">
            <div class="calendar-number">30</div>
            <div class="calendar-events">
              <div class="event-item">
                  <a class="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
                </svg></a>
                Shravan Nageswaran
              </div>
            </div>
          </div>
          <div class="calendar-cell">
            <div class="calendar-number">31</div>
          </div>
          <div class="calendar-cell cell-empty">
            <div class="calendar-number">1</div>
          </div>
          <div class="calendar-cell cell-empty">
            <div class="calendar-number">2</div>
          </div>
          <div class="calendar-cell cell-empty">
            <div class="calendar-number">3</div>
          </div>
        </div>
      </div>
    </div>

    <div class="calendar-manage">
      <div class="calendar-setting">
        <img src="/images/icons8-plus-50.png" /> Add Lesson
      </div>
      <div class="calendar-setting">
        <img src="/images/icons8-search-50.png" /> Search
      </div>
    </div>
  </div>
</div>
</div>

<div class="overlay overlay-date">
<div class="overlay-title">9 April 2018</div>
<div class="overlay-content">
  <div class="overlay-item accent-red">
    <a class="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
    </svg></a>
    <div class="overlay-indent">
      <div class="overlay-item-title">Jason Lipowicz</div>
      <div class="overlay-item-sub">11:00AM to 12:00PM</div>
      <div class="overlay-item-description">1 Hacker Way, London<br />GCSE Maths / Further Maths</div>
    </div>
  </div>
  <div class="overlay-item accent-blue">
      <a class="key-colour accent-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
      </svg></a>
      <div class="overlay-indent">
        <div class="overlay-item-title">Alexandr Zakon</div>
        <div class="overlay-item-sub">3:00PM to 4:00PM</div>
        <div class="overlay-item-description">1 Hacker Way, London<br />Chemistry A-level</div>
      </div>
    </div>
</div>
@endsection