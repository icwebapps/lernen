<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Student;
use App\User;
use App\Tutor;
use App\Resource;

class ResourceControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testIndexAuthorisedUser()
  {
    $tutor = factory(Tutor::class)->create();
    $response = $this->actingAs($tutor->user)->get('/resources');
    $response->assertStatus(200);
  }

  public function testIndexUnauthorisedUser()
  {
    $student = factory(Student::class)->create();
    $response = $this->actingAs($student->user)->get('/resources');
    $response->assertStatus(404);
  }
    
  public function testListWithElements()
  {
    $tutor = factory(Tutor::class)->create();
    factory(Resource::class)->create([
      'tutor_id' => $tutor->user_id
    ]);
    $response = $this->actingAs($tutor->user)->get('/resources/list');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'resources');
  }
   
  public function testListEmpty()
  {
    $tutor = factory(Tutor::class)->create();
    $response = $this->actingAs($tutor->user)->get('/resources/list');
    $response->assertStatus(200);
    $response->assertJsonCount(0, 'resources');
  }
  public function testStore()
  {
    // implement once connected to database
    $this->assertTrue(true);
  }
}
