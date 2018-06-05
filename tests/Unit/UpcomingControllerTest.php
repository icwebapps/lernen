<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use App\User, App\Tutor, App\Student, App\Lesson;

class UpcomingControllerTest extends TestCase 
{

  public function testIndexAction()
  {
    $user = factory(User::class)->create();
    $response = $this->actingAs($user)->get('/upcoming');
    $response->assertStatus(200);
  }  

}