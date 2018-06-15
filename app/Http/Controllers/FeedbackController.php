<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Imagick;

use App\{Submission};

class FeedbackController
{
  public function index($submission)
  {
    return view('feedback', ['submissionId' => $submission]);
  }

  public function pages($submission) {
    $pages = [];
    $path = Submission::find($submission)->url;
    $imagick = new Imagick($path);
    $num = $imagick->getNumberImages();
    for ($i=0; $i<$num; $i++) {
      $imagick->setIteratorIndex($i);
      $imagick->setImageFormat('png');    
      $pages[] = ['data' => base64_encode($imagick->getImageBlob())];
    }
    return ['pages' => $pages];
  }
}