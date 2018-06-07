<?php

use Illuminate\Database\Seeder;
use App\Subjects;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Subject::create(['name' => 'Maths', 'level' => 'A-level']);
    }
}