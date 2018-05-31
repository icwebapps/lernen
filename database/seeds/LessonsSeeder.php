<?php

use Illuminate\Database\Seeder;
use App\Lesson;
use App\Student;
use App\Tutor;

class LessonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Lesson::create([
          'tutor_id' => 4,
          'student_id' => 1,
          'subject' => 'A-level Maths',
          'date' => date("Y-m-d", strtotime("+7 days")),
          'time' => '12:00:00'
        ]);

        Lesson::create([
          'tutor_id' => 4,
          'student_id' => 1,
          'subject' => 'A-level Maths',
          'date' => date("Y-m-d", strtotime("+10 days")),
          'time' => '14:00:00'
        ]);
    }
}
