<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
  private $filetypes = [
    'document' => ['doc', 'docx', 'pdf'],
    'image' => ['jpg', 'jpeg', 'png', 'bmp', 'gif']
  ];

  protected $appends = [
    'type'
  ];

  public function tutor() {
    return $this->belongsTo('App\Tutor', 'tutor_id', 'user_id');
  }

  public function assignments() {
    return $this->hasMany('App\Assignment');
  }

  public function subject() {
    return $this->belongsTo('App\Subject', 'subject_id', 'id');
  }

  public function getTypeAttribute()
  {
    $ext = pathinfo($this->url, PATHINFO_EXTENSION);
    foreach ($this->filetypes as $key => $types) {
      if (in_array($ext, $this->filetypes[$key])) {
        return $key;
      }
    }
    return 'other';
  }
}
