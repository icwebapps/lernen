<?php

use Illuminate\Database\Seeder;
use App\Subject;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      // Create 2 subjects for tutor1
      for ($i=0; $i<2; $i++) {
        factory(Subject::class)->create([
          'tutor_id' => 1
        ]);
      }
    }
}