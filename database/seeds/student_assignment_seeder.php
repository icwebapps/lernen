<?php

use Illuminate\Database\Seeder;
use App\StudentAssignment;
use App\Tutor;
use App\User;

class student_assignment_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      for ($i=0; $i<20; $i++) {
        $t = Tutor::create([ 'user_id' => factory(User::class)->create()->id]);
        StudentAssignment::create([
        'student_id' => 1,
        'resource_id' => random_int(0,20),
        'date_set' => date("Y-m-d", strtotime("-1 days")),
        'date_due' => date("Y-m-d", strtotime("+7 days")),
        'completed' => (bool) random_int(0,1),
        'created_at' => date("Y-m-d", strtotime("-8 days")),
        'updated_at' => date("Y-m-d", strtotime("-5 days")),
        ]);
      }
    }
}