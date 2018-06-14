<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Helpers\ProfileHelper;

class User extends Authenticatable
{
  use Notifiable;

  protected $fillable = [
    'name', 'email', 'password',
  ];

  protected $hidden = [
    'password', 'remember_token',
  ];

  protected $appends = [
    'profile_picture'
  ];

  public function student()
  {
    return $this->hasOne('App\Student');
  }

  public function tutor()
  {
    return $this->hasOne('App\Tutor');
  }

  public function notifications()
  {
    return $this->hasMany('App\Notification');
  }

  public function isTutor()
  {
    return !is_null($this->tutor);
  }

  public function getProfilePictureAttribute()
  {
    return ProfileHelper::picture($this->id);
  }
}
