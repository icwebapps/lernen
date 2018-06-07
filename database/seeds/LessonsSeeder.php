<?php

use Illuminate\Database\Seeder;
use App\Subjects;
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
        Lesson::create([
          'tutor_id' => 4,
          'student_id' => $s[$i]->user_id,
          'subject' => str_random(10),
          'date' => date("Y-m-d", strtotime("+7 days")),
          'time' => '12:00:00',
          'subject_id' => 1
        ]);
      }
    }
}
