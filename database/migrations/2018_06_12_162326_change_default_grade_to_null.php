<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeDefaultGradeToNull extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('submissions', function (Blueprint $table) {
        $table->integer('grade')->nullable()->default(NULL)->change(); 
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('submissions', function (Blueprint $table) {
        $table->integer('grade')->default(0)->change(); 
      });
    }
}
