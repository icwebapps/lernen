<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
  public function user()
  {
    return $this->belongsTo('App\User');
  }

  public function lessons()
  {
    return $this->hasMany('App\Lesson', 'tutor_id', 'user_id');
  }

  public function messages()
  {
    return $this->hasMany('App\Message', 'tutor_id', 'user_id');
  }

  public function resources()
  {
    return $this->hasMany('App\Resource', 'tutor_id', 'user_id');
  }

  public function subjects()
  {
    return $this->hasMany('App\Subject', 'tutor_id', 'user_id');
  }
}
