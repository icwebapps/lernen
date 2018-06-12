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

$factory->define(App\Subject::class, function (Faker $faker) {
  $subjects = ['Maths', 'Chemistry', 'Physics'];
  $levels = ['A-Level', 'GCSE', '11+'];
  return [
    'name' => $subjects[array_rand($subjects)],
    'level' => $levels[array_rand($levels)],
    'tutor_id' => factory(App\Tutor::class)->create()->user_id
  ];
});