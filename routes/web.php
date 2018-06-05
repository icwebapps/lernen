<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/login', 'Auth\LoginController@index')->name('login');
Route::get('/logout', 'Auth\LoginController@logout');
Route::post('/login', 'Auth\LoginController@check_login');


Route::middleware(['auth'])->group(function () {
  Route::get('/dashboard', 'DashboardController@index');
  Route::get('/dashboard/assignments', 'DashboardController@assignments');
  Route::get('/calendar', 'CalendarController@index');
  Route::get('/calendar/events', 'CalendarController@events');
  Route::get('/upcoming', 'UpcomingController@index');

  Route::get('/contacts', 'ContactsController@index');
  Route::get('/contacts/list', 'ContactsController@list');

  Route::get('/messages/{talkingTo}', 'ChatController@fetch');
  Route::post('/messages', 'ChatController@send');

  Route::get('/students', 'ContactsController@index');
  Route::get('/students/list', 'ContactsController@list');

  Route::get('/resources', 'ResourceController@index');
  Route::get('/resources/list', 'ResourceController@list');
  Route::post('/resources', 'ResourceController@store');
});


