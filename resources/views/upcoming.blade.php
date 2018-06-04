@extends('layout')

@section('title', 'Calendar')

@section('content')

@component('sidebar')
@endcomponent

@component('menu')
@endcomponent

        <div class="width-scrollable">
          <div class="column">
            <div class="column-title">Today</div>
            <div class="column-content">
              <div class="card accent-red">
                <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                </svg>11:00</div>
                <div class="card-middle">
                  <div class="card-title">Jason Lipowicz</div>
                  <div class="card-sub">1 Hacker Way, Mill Hill</div>
                  <div class="card-text">GCSE Maths / Further Maths</div>
                </div>
                <div class="card-right">
                  <img src="images/jasonlipowicz.png" class="card-graphic" />
                </div>                
              </div>

              <div class="card accent-red">
                  <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                  </svg>12:00</div>
                  <div class="card-middle">
                    <div class="card-title">Jason Lipowicz</div>
                    <div class="card-sub">1 Hacker Way, Mill Hill</div>
                    <div class="card-text">GCSE Maths / Further Maths</div>
                  </div>
                  <div class="card-right">
                    <img src="images/jasonlipowicz.png" class="card-graphic" />
                  </div>                
                </div>
                <div class="card accent-blue">
                  <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                  </svg>17:00</div>
                  <div class="card-middle">
                    <div class="card-title">Alexandr Zakon</div>
                    <div class="card-sub">10 Queen's Gate, SW7</div>
                    <div class="card-text">Year 9 Chemistry</div>
                  </div>
                  <div class="card-right">
                    <img src="images/alex.jpg" class="card-graphic" />
                  </div>                
                </div>
            </div>
          </div>

          <div class="column">
            <div class="column-title">Tomorrow</div>
            <div class="column-content">
              <div class="card accent-green">
                  <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                  </svg>14:00</div>
                  <div class="card-middle">
                    <div class="card-title">Boaz Francis</div>
                    <div class="card-sub">2 The Grove, Edgware</div>
                    <div class="card-text">GCSE Physics</div>
                  </div>
                  <div class="card-right">
                    <img src="images/boazfrancis.jpg" class="card-graphic" />
                  </div>                
                </div>
            </div>
          </div>

          <div class="column">
            <div class="column-title">Thu 23rd May</div>
            <div class="column-content">
              <div class="card accent-red">
                <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                </svg>11:00</div>
                <div class="card-middle">
                  <div class="card-title">Shravan Nageswaran</div>
                  <div class="card-sub">Beit Quad, Prince Consort Rd</div>
                  <div class="card-text">A-Level Mathematics</div>
                </div>
                <div class="card-right">
                  <img src="images/shravan.jpg" class="card-graphic" />
                </div>                
              </div>

              <div class="card accent-blue">
                <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                </svg>12:00</div>
                <div class="card-middle">
                  <div class="card-title">Alexandr Zakon</div>
                  <div class="card-sub">10 Queen's Gate, SW7</div>
                  <div class="card-text">Year 9 Chemistry</div>
                </div>
                <div class="card-right">
                  <img src="images/alex.jpg" class="card-graphic" />
                </div>                
              </div>

              <div class="card accent-green">
                  <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                  </svg>19:00</div>
                  <div class="card-middle">
                    <div class="card-title">Boaz Francis</div>
                    <div class="card-sub">2 The Grove, Edgware</div>
                    <div class="card-text">GCSE Physics</div>
                  </div>
                  <div class="card-right">
                    <img src="images/boazfrancis.jpg" class="card-graphic" />
                  </div>                
                </div>
            </div>
          </div>

          <div class="column">
            <div class="column-title">Fri 24th May</div>
            <div class="column-content">
              <div class="card accent-red">
                <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                </svg>11:00</div>
                <div class="card-middle">
                  <div class="card-title">Jason Lipowicz</div>
                  <div class="card-sub">1 Hacker Way, Mill Hill</div>
                  <div class="card-text">GCSE Maths / Further Maths</div>
                </div>
                <div class="card-right">
                  <img src="images/jasonlipowicz.png" class="card-graphic" />
                </div>                
              </div>

              <div class="card accent-green">
                  <div class="card-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
                  </svg>14:00</div>
                  <div class="card-middle">
                    <div class="card-title">Boaz Francis</div>
                    <div class="card-sub">2 The Grove, Edgware</div>
                    <div class="card-text">GCSE Physics</div>
                  </div>
                  <div class="card-right">
                    <img src="images/boazfrancis.jpg" class="card-graphic" />
                  </div>                
                </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="footer-left">
            <div class="calendar-key">
              <div class="key-item"><a class="key-colour accent-red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
              </svg></a>Maths</div>
              <div class="key-item"><a class="key-colour accent-green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
              </svg></a>Physics</div>
              <div class="key-item"><a class="key-colour accent-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M25,48C12.318,48,2,37.682,2,25S12.318,2,25,2s23,10.318,23,23S37.682,48,25,48z"></path>
              </svg></a>Chemistry</div>
            </div>
          </div>
          <div class="footer-right"></div>
          </div>
        </div>
      </div>
    </div>
@endsection