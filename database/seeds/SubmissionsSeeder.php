<?php

use Illuminate\Database\Seeder;
use App\{Assignment, Tutor, User, Resource, Subject};

class SubmissionsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // Create assignments from 5 different tutors for student 1
    for ($i = 0; $i < 5; $i++) {
      Submission::create([
        'assignment_id' => 1,
        'url' => str_random(10),
        'grade' => 80,
        'feedback' => str_random(50)
      ]);
    }
  }
}