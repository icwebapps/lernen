<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSubjectRelationshipToAssignments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('assignments', function (Blueprint $table) {
        $table->dropColumn('subject');
        $table->integer('subject_id')->unsigned();
        $table->foreign('subject_id')->references('id')->on('subjects');  
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
        $table->dropForeign(['subject_id']);
        $table->string('subject');
        $table->dropColumn('subject_id');
      });
    }
}
