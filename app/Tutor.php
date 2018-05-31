<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
  public function user() {
    return $this->belongsTo('App\User');
  }

  public function lessons() {
    return $this->hasMany('App\Lesson', 'foreign_key', 'tutor_id');
  }
}
