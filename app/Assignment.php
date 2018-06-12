<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
  protected $fillable = [
    'student_id', 'subject_id',
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

  public function submissions()
  {
    return $this->hasMany('App\Submission');
  }
}
