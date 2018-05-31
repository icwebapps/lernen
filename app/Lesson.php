<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
  public function student() {
    return $this->belongsTo('App\Student');
  }

  public function tutor() {
    return $this->belongsTo('App\Tutor');
  }
}
