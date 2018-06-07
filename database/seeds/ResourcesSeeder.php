<?php

use Illuminate\Database\Seeder;
use App\Subject;
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
      factory(Resource::class)->create([
      'name' => str_random(8),
      'url' => str_random(10),
      'tutor_id' => 4,
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      ]);
    }

    for ($i=0; $i<15; $i++) {
      factory(Resource::class)->create([
      'name' => str_random(8),
      'url' => str_random(10),
      'tutor_id' => 2,
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      'created_at' => date("Y-m-d", strtotime("+7 days")),
      ]);
    }
  }

}
