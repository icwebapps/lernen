<?php

namespace Tests\Unit;


use Tests\TestCase;
use App\{Student, Assignment};

class SubmissionsControllerTest extends TestCase
{

  public function testListWithElements()
  {
    $student = factory(Student::class)->create();
    $assignment = factory(Assignment::class)->create([
      'student_id' => $student->user_id
    ]);

    $this->assertDatabaseHas('assignments', [
      'student_id' => $student->user_id,
      'completed' => false
    ]);

    $response = $this->actingAs($student->user)->post('/submissions', [
      'assignment_id' => $assignment->id,
    ]);

    $response->assertStatus(200);
    $this->assertDatabaseHas('submissions', [
      'assignment_id' => $assignment->id,
      'grade' => 0,
      'feedback' =>""
    ]);

    $this->assertDatabaseHas('assignments', [
      'student_id' => $student->user_id,
      'completed' => true
    ]);
  }

}