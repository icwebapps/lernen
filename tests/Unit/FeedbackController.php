<?php
namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\{Assignment, Submission};

class FeedbackControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testListFeedback()
  {
    $submission = factory(Submission::class)->create([
      'feedback' => [[], []]
    ]);

    $response = $this->actingAs($submission->student->user)->get('/feedback/'.$submission->id.'/list');
    $response->assertStatus(200);
    $response->assertJsonCount(2, 'feedback');
  }

  public function testSubmitFeedback()
  {
    $submission = factory(Submission::class)->create();

    $data = [
      'message' => 'Test one',
      'page' => 0,
      'position' => 100
    ];
    $this->actingAs($submission->student->user)->post('/feedback/'.$submission->id, $data);

    $response = $this->actingAs($submission->student->user)->get('/feedback/'.$submission->id.'/list');
    $response->assertStatus(200);
    $response->assertExactJson([
      'feedback' => [$data]
    ]);
  }

}