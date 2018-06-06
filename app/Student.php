<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  protected $primaryKey = 'user_id';
  
  public function user() {
    return $this->belongsTo('App\User');
  }

  public function lessons() {
    return $this->hasMany('App\Lesson', 'student_id', 'user_id');
  }

  public function messages() {
    return $this->hasMany('App\Message');
  }
}
