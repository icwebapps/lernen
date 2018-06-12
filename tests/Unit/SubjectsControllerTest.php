<?php
namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\{Tutor, Subject, Student};

class SubjectsControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testCreateValid()
  {
    $tutor = factory(Tutor::class)->create();
    $response = $this->actingAs($tutor->user)->post('/subjects', [
      'name' => 'Test Subject',
      'level' => 'Test Level'
    ]);
    $response->assertStatus(200);
    $response->assertJson(['status' => 1]);
    $this->assertDatabaseHas('subjects', [
      'name' => 'Test Subject',
      'level' => 'Test Level',
      'tutor_id' => $tutor->user_id
    ]);
  }

  public function testListAsStudent()
  {
    $student = factory(Student::class)->create();
    $response = $this->actingAs($student->user)->get('/subjects/list');
    $response->assertStatus(404);
  }

  public function testListAsTutor()
  {
    $tutor = factory(Tutor::class)->create();
    factory(Subject::class)->create([ 'tutor_id' => $tutor->user_id ]);
    $response = $this->actingAs($tutor->user)->get('/subjects/list');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'subjects');
  }
}