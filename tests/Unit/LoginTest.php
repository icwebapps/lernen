<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    public function testForRequiredFields()
    {
      $response = $this->post('/login', [
        'email' => '',
        'password' => ''
      ]);
      $response->assertSeeText('The email field is required.');
    }
}
