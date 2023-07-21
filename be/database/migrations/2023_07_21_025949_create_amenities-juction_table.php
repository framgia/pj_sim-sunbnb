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
        Schema::create('amenities-junction', function (Blueprint $table) { 
            $table->id();
            $table->foreignId('room_id')->constrained('room')->cascadeOnDelete();
            $table->foreignId('amenities_id')->constrained('amenities')->cascadeOnDelete();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
