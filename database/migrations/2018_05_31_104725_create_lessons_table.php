<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tutor_id')->unsigned();
            $table->integer('student_id')->unsigned();
            $table->string('subject');
            $table->date('date');
            $table->time('time');
            $table->string('location')->nullable();
            $table->boolean('completed')->default(false);
            $table->timestamps();

            $table->foreign('tutor_id')->references('user_id')->on('tutors');
            $table->foreign('student_id')->references('user_id')->on('students');
            $table->foreign('subject')->references('name')->on('subjects');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lessons');
    }
}
