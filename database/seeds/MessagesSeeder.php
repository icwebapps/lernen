<?php

use Illuminate\Database\Seeder;
use App\Message, App\Student, App\User;

class MessagesSeeder extends Seeder
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
      Message::create([
        'tutor_id' => 4,
        'student_id' => $s->user_id,
        'message' => 'Test message ' . $i,
        'tutor_sent' => (bool) random_int(0, 1)
      ]);
    }
  }
}
