<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
  public function tutor() {
    return $this->belongsTo('App\Tutor', 'tutor_id', 'user_id');
  }
}
