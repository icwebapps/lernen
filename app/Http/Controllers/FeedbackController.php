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

  public function list($submission) {
    $sub = Submission::find($submission);
    if (empty($sub->feedback)) {
      $sub->feedback = [];
    }
    return ['feedback' => $sub->feedback];
  }

  public function save($submission, Request $request) {
    $sub = Submission::find($submission);
    if (empty($sub->feedback)) {
      $sub->feedback = [];
    }
    $arr = $sub->feedback;
    $arr[] = [
      'message' => $request->input('message'),
      'page' => $request->input('page'),
      'position' => $request->input('position')
    ];
    $sub->feedback = $arr;
    $sub->save();
    return ['status' => 1];
  }
}