<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
  protected $casts = [
    'feedback' => 'array'
  ];
  
  public function assignment() {
    return $this->belongsTo('App\Assignment', 'assignment_id', 'id');
  }
}