<?php

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

$factory->define(App\Lesson::class, function (Faker $faker) {
  $tutor = factory(App\Tutor::class)->create();
  return [
    'tutor_id' => $tutor->user_id,
    'student_id' => factory(App\Student::class)->create()->id,
    'date' => $faker->date,
    'time' => $faker->time,
    'location' => 'London, United Kingdom',
    'subject_id' => factory(App\Subject::class)->create([ 'tutor_id' => $tutor->user_id ])->id
  ];
});
