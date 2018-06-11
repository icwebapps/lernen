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

$factory->define(App\Resource::class, function (Faker $faker) {
  return [
    'name' => 'Resource ' . rand(0, 10000),
    'url' => 'http://lernen.co.uk/fakepath/',
    'created_at' => $faker->date,
    'updated_at' => $faker->date,
    'tutor_id' => factory(App\Tutor::class)->create()->id,
    'subject_id' => factory(App\Subject::class)->create()->id
  ];
});
