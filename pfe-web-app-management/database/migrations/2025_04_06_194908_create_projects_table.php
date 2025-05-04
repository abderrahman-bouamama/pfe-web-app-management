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
   Schema::create('projects', function (Blueprint $table) {
    $table->id();
    $table->string('title');                // ← titre du projet
    $table->text('description')->nullable(); // ← description facultative
    $table->date('start_date');             // ← date de début
    $table->date('end_date');               // ← date de fin
    $table->string('status');               // ← statut (En cours, Terminé, etc.)
    $table->foreignId('responsible_id')->nullable()->constrained('users')->nullOnDelete(); // ← clé étrangère vers users
    $table->timestamps();
});


}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
