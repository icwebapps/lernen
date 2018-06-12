<?php
namespace Tests\Unit;
use Tests\TestCase;
use App\{Student, Assignment, Lesson, Submission};

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
      'grade' => NULL,
      'feedback' =>""
    ]);

    $this->assertDatabaseHas('assignments', [
      'student_id' => $student->user_id,
      'completed' => true
    ]);
  }

  public function testProgressUnmarked()
  {
    $assignment = factory(Assignment::class)->create();
    $lesson = factory(Lesson::class)->create([
      'tutor_id' => $assignment->resource->tutor->user_id,
      'student_id' => $assignment->student_id,
      'subject_id' => $assignment->subject_id
    ]);
    $submission = factory(Submission::class)->create([
      'assignment_id' => $assignment->id,
      'grade' => NULL
    ]);
    $response = $this->actingAs($assignment->student->user)->get('/submissions/progress');
    $response->assertStatus(200);
    $response->assertJsonFragment([
      "level" => $assignment->subject->level,
      "name" => $assignment->subject->name,
      "progress" =>  [
        "count" => 0,
        "total" => 0
      ],
      "tutor_id" => $assignment->resource->tutor->user_id
    ]);
  }

}