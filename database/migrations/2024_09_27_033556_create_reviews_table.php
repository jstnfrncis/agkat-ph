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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // User who posted the review
            $table->foreignId('establishment_id')->constrained()->onDelete('cascade'); // Establishment being reviewed
            $table->text('comment')->nullable(); // User's comment
            $table->unsignedTinyInteger('food_rating'); 
            $table->unsignedTinyInteger('service_rating'); 
            $table->unsignedTinyInteger('cleanliness_rating'); 
            $table->unsignedTinyInteger('price_rating'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
