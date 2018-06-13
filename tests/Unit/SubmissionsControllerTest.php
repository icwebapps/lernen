<?php
namespace Tests\Unit;
use Tests\TestCase;
use App\{Student, Assignment, Lesson, Submission, Subject, Tutor, Resource};


class SubmissionsControllerTest extends TestCase
{

  public function testSubmittingNewAssignment()
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

  public function testProgressMarked()
  {
    $tutor = factory(Tutor::class)->create();
    $student = factory(Student::class)->create();
    $subject = factory(Subject::class)->create(['tutor_id' => $tutor->user_id ]);
    $assignment = factory(Assignment::class)->create([
      'subject_id' => $subject->id,
      'student_id' => $student->user_id,
      'resource_id' => factory(Resource::class)->create(['tutor_id' => $tutor->user_id ])->id
    ]);
    $assignment2 = factory(Assignment::class)->create([
      'subject_id' => $subject->id,
      'student_id' => $student->user_id,
      'resource_id' => factory(Resource::class)->create(['tutor_id' => $tutor->user_id ])->id
    ]);
    $lesson = factory(Lesson::class)->create([
      'tutor_id' => $tutor->user_id,
      'student_id' => $student->user_id,
      'subject_id' => $subject->id
    ]);
    factory(Submission::class)->create([
      'assignment_id' => $assignment->id,
      'grade' => 30
    ]);
    factory(Submission::class)->create([
      'assignment_id' => $assignment2->id,
      'grade' => 50
    ]);
    $response = $this->actingAs($student->user)->get('/submissions/progress');
    $response->assertStatus(200);
    $response->assertJsonFragment([
      "level" => $subject->level,
      "name" => $subject->name,
      "progress" =>  [
        "count" => 2,
        "total" => 80
      ],
      "tutor_id" => $tutor->user_id
    ]);
  }
  public function testListWithElements()
  {
    $tutor = factory(Tutor::class)->create();
    $resource = factory(Resource::class)->create([
      'tutor_id' => $tutor->user_id
    ]);
    $assignment = factory(Assignment::class)->create([
      'resource_id' => $resource->id
    ]);
    factory(Submission::class)->create([
      'assignment_id' => $assignment->id
    ]);
    $response = $this->actingAs($tutor->user)->get('/submissions/list');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'submissions');
  }

}