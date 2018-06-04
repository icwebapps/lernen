<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAssignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assignments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('subject');
            $table->date('date_set');
            $table->date('date_due');
            $table->boolean('completed');
            $table->integer('resource_id')->unsigned();
            $table->integer('tutor_id')->unsigned();
            $table->integer('student_id')->unsigned();
            $table->timestamps();

            $table->foreign('resource_id')->references('id')->on('resources');
            $table->foreign('tutor_id')->references('user_id')->on('tutors');
            $table->foreign('student_id')->references('user_id')->on('students');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assignments');
    }
}
