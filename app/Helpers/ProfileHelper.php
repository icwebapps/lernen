<?php
namespace App\Helpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
 
class ProfileHelper {

  public static function picture($user_id) {
    $file = "profiles/$user_id.jpg";
    if (Storage::disk('s3')->exists($file)) {
      return "http://" . env('AWS_BUCKET') . "/" . $file;
    }
    else {
      return "/images/profile-default.png";
    }
  }

}