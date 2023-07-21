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
        Schema::create('listing', function (Blueprint $table) {
            $table->id();
            $table->string('listing_name');
            $table->float('price');
            $table->string('address');
            $table->text('details');
            $table->text('img_path')->nullable();
            $table->foreignId('host_id')->constrained('host')->cascadeOnDelete();
            $table->foreignId('home_id')->constrained('home')->cascadeOnDelete();
            $table->foreignId('room_id')->constrained('room')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listing');
    }
};
