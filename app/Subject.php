<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
  protected $fillable = [
    'name', 'level'
  ];
  
  public function lessons() {
    return $this->hasMany('App\Lesson', 'subject_id', 'id');
  }   
}