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
      // Tutor1 teaches all the students
      $students = Student::all();
      $subjects = User::find(1)->tutor->subjects->all();      
      for ($i=0; $i<count($students); $i++) {
        factory(Lesson::class)->create([
          'tutor_id' => 1,
          'student_id' => $students[$i]->user_id,
          'date' => date("Y-m-d", strtotime("+7 days")),
          'time' => '12:00:00',
          'subject_id' => $subjects[array_rand($subjects)]
        ]);
      }
    }
}
