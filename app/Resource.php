<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
  public function tutor() {
    return $this->belongsTo('App\Tutor', 'tutor_id', 'user_id');
  }

  public function assignments() {
    return $this->hasMany('App\Assignment');
  }

  public function subject() {
    return $this->belongsTo('App\Subject', 'subject_id', 'id');
  }
}
