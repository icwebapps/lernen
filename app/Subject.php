<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
  protected $fillable = [
    'name', 'level', 'tutor_id'
  ];
  
  public function lessons()
  {
    return $this->hasMany('App\Lesson', 'subject_id', 'id');
  }
  
  public function tutor()
  {
    return $this->belongsTo('App\Tutor', 'tutor_id', 'user_id');
  }  
}