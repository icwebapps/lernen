<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTutorIdToResourcesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('resources', function (Blueprint $table) {
      $table->integer('tutor_id')->unsigned();
      $table->foreign('tutor_id')->references('user_id')->on('tutors');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('resources', function (Blueprint $table) {
      $table->dropForeign(['tutor_id']);
      $table->dropColumn('tutor_id');
    });
  }
}
