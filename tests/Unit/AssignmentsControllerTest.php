<?php
namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Assignment;
use Tests\TestCase;
use App\{User, Student};

class AssignmentsControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testRetrieveTasks()
  {
    $student = factory(Student::class)->create();
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
    $student = factory(Student::class)->create();

    $response = $this->actingAs($student->user)->get('/assignments/list');
    $response->assertStatus(200);
    $response->assertJsonCount(0, 'tasks');
  }

  public function testRetrieveOnlyIncompleteTasks()
  {
    $student = factory(Student::class)->create();
    factory(Assignment::class)->create([
      'student_id' => $student->user_id,
      'completed' => true
    ]);

    factory(Assignment::class)->create([
      'student_id' => $student->user_id,
      'completed' => false
    ]);

    $response = $this->actingAs($student->user)->get('/assignments/list?completed=false');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'tasks');
  }
}