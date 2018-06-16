<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Imagick;

use App\{Submission, Notification};

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
      'marks' => $request->input('marks'),
      'totalMarks' => $request->input('totalMarks'),
      'page' => $request->input('page'),
      'position' => $request->input('position')
    ];
    $sub->feedback = $arr;
    $sub->save();
    return ['status' => 1];
  }

  public function finish($submission, Request $request)
  {
    $sub = Submission::find($submission);
    $feedback = $sub->feedback;
    $runningCount = 0;
    $runningTotal = 0;
    foreach ($feedback as $x) {
      $runningCount += floatval($x['marks']);
      $runningTotal += floatval($x['totalMarks']);
    }
    if ($runningTotal == 0) {
      $sub->grade = 0;
    }
    else {
      $sub->grade = round($runningCount / $runningTotal, 2) * 100;
    }
    $sub->save();

    Notification::create([
      'user_id' => $sub->assignment->student->user_id,
      'message' => Auth::user()->name . " has graded " . $sub->assignment->title . ". You obtained " . $sub->grade . "%",
      'url' => '/submissions'
    ]);
    return ["status" => 1];
  }

}