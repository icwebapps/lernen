<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('messages', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('student_id')->unsigned();
          $table->integer('tutor_id')->unsigned();
          $table->text('message');
          $table->timestamps();

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
        Schema::dropIfExists('messages');
    }
}
