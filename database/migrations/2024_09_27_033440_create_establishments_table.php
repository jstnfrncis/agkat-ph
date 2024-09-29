<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('establishments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('usertype')->default('establishment');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->text('description')->nullable();
            $table->string('address')->nullable();
            $table->tinyInteger('status')->default (1);
            $table->string('cover_photo')->nullable(); // Store cover photo banner
            $table->string('sale_section_photo')->nullable(); // Store sale section photo
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('establishments');
    }
};
