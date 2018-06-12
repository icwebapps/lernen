<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
  protected $fillable = [
    'tutor_id', 'student_id', 'date', 'time', 'location', 'subject_id'
  ];

  public function student()
  {
    return $this->belongsTo('App\Student', 'student_id', 'user_id');
  }

  public function tutor()
  {
    return $this->belongsTo('App\Tutor', 'tutor_id', 'user_id');
  }

  public function subject() {
    return $this->belongsTo('App\Subject', 'subject_id', 'id');
  }
}
