<?php
namespace App\Helpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
 
class ProfileHelper {

  public static function picture($user_id) {
    $file = "profile/$user_id.jpg";
    if (Storage::disk('s3')->exists($file)) {
      return Storage::url($file);
    }
    else {
      return "/images/profile-default.png";
    }
  }

}