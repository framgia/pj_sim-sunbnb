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
        Schema::create('reservation', function (Blueprint $table) {
            $table->id();
            $table->date('check_in');
            $table->date('check_out');
            $table->float('total_price');
            $table->boolean('arrived')->default(false);
            $table->boolean('is_approve')->default(false);
            $table->boolean('is_cancel')->default(false);
            $table->foreignId('client_id')->constrained('client')->cascadeOnDelete();
            $table->foreignId('room_id')->constrained('room')->cascadeOnDelete();
            $table->foreignId('host_id')->constrained('host')->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservation');
    }
};
