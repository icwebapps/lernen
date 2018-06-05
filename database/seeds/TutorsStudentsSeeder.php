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
    Student::create([
      'user_id' => User::where('name', 'Jason Lipowicz')->first()->id
    ]);
    Student::create([
      'user_id' => User::where('name', 'Alex Zakon')->first()->id
    ]);
    Tutor::create([
      'user_id' => User::where('name', 'Boaz Francis')->first()->id
    ]);
    Tutor::create([
      'user_id' => User::where('name', 'Shravan Nageswaran')->first()->id
    ]);
  }
}
