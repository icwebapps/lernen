<?php
namespace Tests\Unit;

use App\Assignment;

class CalendarControllerTest extends TestCase
{
  public function testRetrieveTasks()
  {
    $user = factory(User::class)->create();
    $student = factory(Student::class)->create([
      'user_id' => $user->id
    ]);
    factory(Assignment::class)->create([
      'student_id' => $student->user_id,
      'tutor_id' => factory(Tutor::class)->create()
    ]);
    factory(Assignment::class)->create([
      'student_id' => 1,
      'tutor_id' => factory(Tutor::class)->create()
    ]);

    $response = $this->actingAs($student->user)->get('/assignments/list');
    $response->assertStatus(200);
    $response->assertJsonCount('tasks', 1);
  }

  public function testRetrieveNoTasks()
  {
    $user = factory(User::class)->create();
    $student = factory(Student::class)->create([
      'user_id' => $user->id
    ]);

    $response = $this->actingAs($student->user)->get('/assignments/list');
    $response->assertStatus(200);
    $response->assertJsonCount('tasks', 0);
  }
}