<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTutorsAndStudentsToAssignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('student_assignments', function (Blueprint $table) {
            $table->integer('tutor_id')->unsigned();
            $table->integer('student_id')->unsigned();

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
      Schema::table('student_assignments', function (Blueprint $table) {
        $table->dropForeign(['tutor_id']);
        $table->dropForeign(['student_id']);
        $table->dropColumn('tutor_id');
        $table->dropColumn('student_id');
      });
    }
}
