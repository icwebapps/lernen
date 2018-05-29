<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
          'name' => 'Jason Lipowicz',
          'email' => 'jlipowicz@hotmail.co.uk',
          'password' => Hash::make('test123'),
          'remember_token' => str_random(10)
        ]);
        User::create([
          'name' => 'Boaz Francis',
          'email' => 'bf816@ic.ac.uk',
          'password' => Hash::make('test123'),
          'remember_token' => str_random(10)
        ]);
        User::create([
          'name' => 'Alex Zakon',
          'email' => 'azakon@imperial.ac.uk',
          'password' => Hash::make('test123'),
          'remember_token' => str_random(10)
        ]);
        User::create([
          'name' => 'Shravan Nageswaran',
          'email' => 'snag@imperial.ac.uk',
          'password' => Hash::make('test123'),
          'remember_token' => str_random(10)
        ]);
    }
}
