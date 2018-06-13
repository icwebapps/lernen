<?php
use App\Message;
use App\Tutor;
use App\Student;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Message::class, function (Faker $faker) {
  return [
    'student_id' => factory(Student::class)->create()->user_id,
    'tutor_id' => factory(Tutor::class)->create()->user_id,
    'tutor_sent' => 0,
    'message' => 'Test Message'
  ];
});
