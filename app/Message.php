<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
  /**
   * Fields that are mass assignable
   *
   * @var array
   */
  protected $fillable = ['message', 'student_id', 'tutor_id', 'tutor_sent'];  

  public function student()
  {
    return $this->belongsTo('App\Student', 'student_id', 'user_id');
  }

  public function tutor()
  {
    return $this->belongsTo('App\Tutor', 'tutor_id', 'user_id');
  }

  public function scopeTutorSent($query)
  {
    return $query->where('tutor_sent', 1);
  }

  public function scopeStudentSent($query)
  {
    return $query->where('tutor_sent', 0);
  }

  public function scopeUnread($query)
  {
    return $query->where('seen', 0);
  }
}
