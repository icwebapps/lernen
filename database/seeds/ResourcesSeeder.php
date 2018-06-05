<?php

use Illuminate\Database\Seeder;
use App\Student;
use App\Resource;
use App\User;


class ResourcesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    for ($i=0; $i<15; $i++) {
      $s = Student::create([ 'user_id' => factory(User::class)->create()->id ]);
      Resource::create([
      'name' => str_random(8),
      'url' => str_random(10),
      'tutor_id' => 4,
      'student_id' => $s->user_id,
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      ]);
    }

    for ($i=0; $i<15; $i++) {
      $s = Student::create([ 'user_id' => factory(User::class)->create()->id ]);
      Resource::create([
      'name' => str_random(8),
      'url' => str_random(10),
      'tutor_id' => 2,
      'student_id' => $s->user_id,
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      ]);
    }
  }

}
