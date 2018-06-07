<?php
namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Assignment;
use Tests\TestCase;
use App\{User, Student, Tutor};

class AssignmentsControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testRetrieveTasks()
  {
    $user = factory(User::class)->create();
    $student = factory(Student::class)->create([
      'user_id' => $user->id
    ]);
    factory(Assignment::class)->create([
      'student_id' => $student->user_id
    ]);
    factory(Assignment::class)->create([
      'student_id' => factory(Student::class)->create()->user_id
    ]);

    $response = $this->actingAs($student->user)->get('/assignments/list');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'tasks');
  }

  public function testRetrieveNoTasks()
  {
    $user = factory(User::class)->create();
    $student = factory(Student::class)->create([
      'user_id' => $user->id
    ]);

    $response = $this->actingAs($student->user)->get('/assignments/list');
    $response->assertStatus(200);
    $response->assertJsonCount(0, 'tasks');
  }
}