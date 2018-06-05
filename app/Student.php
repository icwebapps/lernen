<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  public function user() {
    return $this->belongsTo('App\User');
  }

  public function lessons() {
    return $this->hasMany('App\Lesson', 'student_id', 'user_id');
  }

  public function messages() {
    return $this->hasMany('App\Message');
  }
  
  public function assignments() {
    return $this->hasMany('App\Assignment', 'student_id', 'user_id');
  }
}
