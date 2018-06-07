<?php

use Illuminate\Database\Seeder;
use App\Subjects;

class SubjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Subjects::create(['name' => 'Maths', 'level' => 'A-level']);
    }
}