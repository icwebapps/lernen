<?php

use Illuminate\Database\Seeder;
use App\Subject;
use App\Lesson;
use App\Student;
use App\Tutor;
use App\User;

class LessonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      // Create lessons with 15 different students in the next month for tutor 4
      $s = Student::all();
      for ($i=0; $i<15; $i++) {
        factory(Lesson::class)->create([
          'tutor_id' => 4,
          'student_id' => $s[$i]->user_id,
          'date' => date("Y-m-d", strtotime("+7 days")),
          'time' => '12:00:00'
        ]);
      }
    }
}
