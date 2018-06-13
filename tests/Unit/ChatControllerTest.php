<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use App\User, App\Tutor, App\Student, App\Message;

class ChatControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testFetchAsTutor()
  {
    $tutor = factory(Tutor::class)->create();
    $student = factory(Student::class)->create();
    $student2 = factory(Student::class)->create();

    // Correct message
    Message::create([
      'tutor_id' => $tutor->user_id,
      'student_id' => $student->user_id,
      'message' => 'Test',
      'tutor_sent' => 0
    ]);

    // Incorrect message
    Message::create([
      'tutor_id' => $tutor->user_id,
      'student_id' => $student2->user_id,
      'message' => 'Test2',
      'tutor_sent' => 1
    ]);
    $response = $this->actingAs($tutor->user)->get('messages/'.$student->user_id);
    $response->assertStatus(200);
    $response->assertJsonCount(1);
  }

  public function testSendMessage()
  {
    $tutor = factory(Tutor::class)->create();
    $student = factory(Student::class)->create();
    $response = $this->actingAs($tutor->user)->post('/messages', [
      'message' => 'This is a test message',
      'other_id' => $student->user_id
    ]);
    $response->assertStatus(200);

    $this->assertDatabaseHas('messages', [
      'message' => 'This is a test message'
    ]);
  }

  public function testSeenMessage()
  {
    $message = factory(Message::class)->create();
    $this->assertDatabaseHas('messages', [
      'id' => $message->id,
      'seen' => 0
    ]);
    $this->actingAs($message->tutor->user)->post('messages/seen', [ 'id' => $message->student->user_id ]);
    $this->assertDatabaseHas('messages', [
      'id' => $message->id,
      'seen' => 1
    ]);
  }
}