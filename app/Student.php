<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  public function user() {
    return $this->belongsTo('App\User');
  }

  public function lessons() {
    return $this->hasMany('App\Lesson', 'foreign_key', 'student_id');
  }
}
