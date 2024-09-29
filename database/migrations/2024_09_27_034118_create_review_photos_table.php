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
        Schema::create('review_photos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('review_id')->constrained()->onDelete('cascade'); // Review to which the photo belongs
            $table->string('photo_path'); // Path to the uploaded photo
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('review_photos');
    }
};
