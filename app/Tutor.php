<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
  protected $primaryKey = 'user_id';

  public function user() {
    return $this->belongsTo('App\User');
  }

  public function lessons() {
    return $this->hasMany('App\Lesson', 'tutor_id', 'user_id');
  }
}
