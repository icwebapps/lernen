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
    $response = $this->actingAs($tutor->user)->get('/students');
    $response->assertStatus(200);
    $response->assertViewIs('tutees');
  }

  public function testIndexStudentAction()
  {
    $student = factory(Student::class)->create();
    $response = $this->actingAs($student->user)->get('/tutors');
    $response->assertStatus(404);
  }

  public function testRetrieveTuteesValid()
  {
    $tutor = factory(Tutor::class)->create();
    $response = $this->actingAs($tutor->user)->get('/students/list');
    $response->assertStatus(200);
    $response->assertJson([ 'contacts' => [] ]);
  }

  public function testRetrieveTuteesInvalid()
  {
    $student = factory(Student::class)->create();
    $response = $this->actingAs($student->user)->get('/students/list');
    $response->assertStatus(404);
  }
}