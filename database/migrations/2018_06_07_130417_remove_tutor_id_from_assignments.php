<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveTutorIdFromAssignments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('assignments', function (Blueprint $table) {
        $table->dropForeign('student_assignments_tutor_id_foreign');
        $table->dropColumn('tutor_id');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('assignments', function (Blueprint $table) {
        $table->integer('tutor_id')->unsigned();
        $table->foreign('tutor_id')->references('user_id')->on('tutors');
      });
    }
}
