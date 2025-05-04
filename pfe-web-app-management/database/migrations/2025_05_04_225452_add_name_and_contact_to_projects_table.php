<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('projects', function (Blueprint $table) {
        if (!Schema::hasColumn('projects', 'name')) {
            $table->string('name')->after('id'); // titre ou nom du projet
        }

        if (!Schema::hasColumn('projects', 'chef')) {
            $table->string('chef')->nullable()->after('name');
        }

        if (!Schema::hasColumn('projects', 'status')) {
            $table->string('status')->nullable()->after('chef');
        }

        if (!Schema::hasColumn('projects', 'contact')) {
            $table->string('contact')->nullable()->after('status');
        }
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            //
        });
    }
};
