<?php
use App\{Submission, Assignment};
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

$factory->define(Submission::class, function (Faker $faker) {

  return [
    'assignment_id' => factory(Assignment::class)->create(),
    'url' => 'http://lernen.co.uk/fakepath/',
    'grade' => 90,
    'feedback' => ""
  ];
});
