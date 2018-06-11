<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Student;
use App\Tutor;

class TutorsStudentsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Tutor::create([
      'user_id' => 1
    ]);
    Tutor::create([
      'user_id' => 2
    ]);
    Student::create([
      'user_id' => 3
    ]);
    Student::create([
      'user_id' => 4
    ]);

    // Create 5 more random students
    for ($i=0; $i<5; $i++) {
      factory(Student::class)->create();
    }
  }
}
