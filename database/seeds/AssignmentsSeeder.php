<?php

use Illuminate\Database\Seeder;
use App\Assignment;
use App\Tutor;
use App\User;
use App\Resource;

class AssignmentsSeeder extends Seeder
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
      $t = Tutor::create(['user_id' => factory(User::class)->create()->id]);
      Assignment::create([
        'student_id' => 1,
        'tutor_id' => $t->user_id,
        'subject' => str_random(10),
        'date_set' => date("Y-m-d", strtotime("-1 days")),
        'date_due' => date("Y-m-d", strtotime("+7 days")),
        'resource_id' => factory(Resource::class)->create()->id,
        'title' => "homework " . $i
      ]);
    }
  }
}
