<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class StudentAssignment extends Model
{
    public function student() {
        return $this->belongsTo('App\Student', 'student_id', 'user_id');
    }
    public function tutor() {
        return $this->belongsTo('App\Tutor', 'tutor_id', 'user_id');
    }
}