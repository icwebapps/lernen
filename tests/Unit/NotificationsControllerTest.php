<?php
namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\{User, Notification};

class NotificationsControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testRetrieveOnlyUnread()
  {
    $user = factory(User::class)->create();
    $notification_unread = factory(Notification::class)->create([ 'user_id' => $user->id ]);
    $notification_read = factory(Notification::class)->create([ 'user_id' => $user->id, 'seen' => true ]);

    $response = $this->actingAs($user)->get('/notifications/unread');
    $response->assertStatus(200);
    $response->assertJsonCount(1, 'notifications');
  }

  public function testRetrieveAll()
  {
    $user = factory(User::class)->create();
    $user2 = factory(User::class)->create();
    $notification_unread = factory(Notification::class)->create([ 'user_id' => $user->id ]);
    $notification_read = factory(Notification::class)->create([ 'user_id' => $user->id, 'seen' => true ]);
    factory(Notification::class)->create([ 'user_id' => $user2->id ]);

    $response = $this->actingAs($user)->get('/notifications/all');
    $response->assertStatus(200);
    $response->assertJsonCount(2, 'notifications');
  }

  public function testClearAll()
  {
    $user = factory(User::class)->create();
    $notification1 = factory(Notification::class)->create([ 'user_id' => $user->id ]);
    $notification2 = factory(Notification::class)->create([ 'user_id' => $user->id ]);

    $response = $this->actingAs($user)->post('/notifications/clear');
    $response->assertStatus(200);

    $response2 = $this->actingAs($user)->get('/notifications/unread');
    $response2->assertJsonCount(0, 'notifications');
  }

  public function testClearOne()
  {
    $user = factory(User::class)->create();
    $notification1 = factory(Notification::class)->create([ 'user_id' => $user->id ]);
    $notification2 = factory(Notification::class)->create([ 'user_id' => $user->id ]);

    $response = $this->actingAs($user)->post('/notifications/clear', ['id' => $notification1->id ]);
    $response->assertStatus(200);

    $response2 = $this->actingAs($user)->get('/notifications/unread');
    $response2->assertJsonCount(1, 'notifications');
  }
}