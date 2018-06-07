<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
  protected $fillable = [
    'student_id', 'tutor_id', 'subject',
    'date_set', 'date_due', 'resource_id', 'title'
  ];
  
  public function student()
  {
    return $this->belongsTo('App\Student', 'student_id', 'user_id');
  }

  public function resource()
  {
    return $this->belongsTo('App\Resource', 'resource_id', 'id');
  }
}
