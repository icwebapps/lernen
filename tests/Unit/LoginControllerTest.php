<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use App\User;

class LoginControllerTest extends TestCase
{
  use RefreshDatabase;

  public function testLoginFormDisplayed()
  {
    $response = $this->get('/login');
    $response->assertStatus(200);
  }

  public function testForValidUser()
  {
    $user = factory(User::class)->create([
      'email' => 'john@example.com', 
      'password' => Hash::make('testpass123')
    ]);

    $response = $this->post('/login', [
      'email' => $user->email,
      'password' => 'testpass123'
    ]);

    $response->assertStatus(200);
    $response->assertJson([ 'login' => 1 ]);      
    $this->assertAuthenticatedAs($user);
  }

  public function testForInvalidUser()
  {
    $user = factory(User::class)->create();
    session()->setPreviousUrl('/login');
    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'invalid'
    ]);
    $response->assertStatus(200);
    $response->assertJson([ 'login' => 0 ]);
    $this->assertGuest();
  }
  
  public function testLogoutAnAuthenticatedUser()
  {
    $user = factory(User::class)->create();
    $response = $this->actingAs($user)->get('/logout');
    $response->assertStatus(302);
    $response->assertRedirect('/');
    $this->assertGuest();
  }

  public function testRedirectToLoginIfNotAuthenticated()
  {
    $response = $this->get('/dashboard');
    $response->assertStatus(302);
    $response->assertRedirect('/login');
    $this->assertGuest();
  }
}