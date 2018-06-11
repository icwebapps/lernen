<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('submissions', function (Blueprint $table) {
        $table->increments('id');
        $table->integer('assignment_id');
        $table->string('url');
        $table->integer('grade');
        $table->text('feedback');
        $table->timestamps();

        $table->foreign('assignment_id')->references('id')->on('assignments');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::dropIfExists('submissions');
    }
}
