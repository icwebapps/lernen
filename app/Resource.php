<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
  public function Resource() {
    return $this->belongsTo('App\Tutor');
  }

  public function lessons() {
    return $this->hasMany('App\Student', 'student_id', 'tutor_id');
  }
}
