<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    User::create([
      'name' => 'Tutor1 User',
      'email' => 'tutor1@lernen.co.uk',
      'password' => Hash::make('test123'),
      'remember_token' => str_random(10)
    ]);
    User::create([
      'name' => 'Tutor2 User',
      'email' => 'tutor2@lernen.co.uk',
      'password' => Hash::make('test123'),
      'remember_token' => str_random(10)
    ]);
    User::create([
      'name' => 'Student1 User',
      'email' => 'student1@lernen.co.uk',
      'password' => Hash::make('test123'),
      'remember_token' => str_random(10)
    ]);
    User::create([
      'name' => 'Student2 User',
      'email' => 'student2@lernen.co.uk',
      'password' => Hash::make('test123'),
      'remember_token' => str_random(10)
    ]);
  }
}
