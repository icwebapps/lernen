<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use App\User, App\Tutor, App\Student, App\Lesson;

class ContactsControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testIndexTutorAction()
  {
    $tutor = factory(Tutor::class)->create();
    $response = $this->actingAs($tutor->user)->get('/contacts');
    $response->assertStatus(200);
    $response->assertViewIs('contacts');
  }

  public function testIndexStudentAction()
  {
    $student = factory(Student::class)->create();
    $response = $this->actingAs($student->user)->get('/contacts');
    $response->assertStatus(200);
    $response->assertViewIs('contacts');
  }

  public function testRetrieveTuteesValid()
  {
    $tutor = factory(Tutor::class)->create();
    factory(Lesson::class)->create([
      'student_id' => factory(Student::class)->create()->user_id,
      'tutor_id' => $tutor->user_id
    ]);
    $response = $this->actingAs($tutor->user)->get('/contacts/list');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'contacts');
  }

  public function testRetrieveStudentsValid()
  {
    $student = factory(Student::class)->create();
    factory(Lesson::class)->create([
      'tutor_id' => factory(Tutor::class)->create()->user_id,
      'student_id' => $student->user_id
    ]);
    $response = $this->actingAs($student->user)->get('/contacts/list');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'contacts');
  }

  public function testRetrieveInvalid()
  {
    $student = factory(Student::class)->create();
    $response = $this->actingAs($student->user)->get('/contacts/list');
    $response->assertStatus(200);
    $response->assertJsonCount(0, 'contacts');
  }
}