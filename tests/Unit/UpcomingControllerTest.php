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

  public function testRetrieveEvents()
  {
    $user = factory(User::class)->create();
    $tutor = factory(Tutor::class)->create([
      'user_id' => $user->id
    ]);
    $student = factory(Student::class)->create();
    $lesson = factory(Lesson::class)->create([
      'tutor_id' => $tutor->user_id,
      'student_id' => $student->user_id,
      'date' => date("Y-m-d", strtotime("+7 days")),
    ]);

    $response = $this->actingAs($user)->get('/calendar/events');
    $response->assertStatus(200);
    $response->assertJson([ 'events' => [] ]);
  }

}