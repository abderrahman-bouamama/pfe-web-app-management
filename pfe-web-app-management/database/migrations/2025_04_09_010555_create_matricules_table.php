<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('matricules', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->boolean('used')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('matricules');
    }
};

