<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            if (!Schema::hasColumn('projects', 'description')) {
                $table->text('description')->nullable()->after('title');
            }

            if (!Schema::hasColumn('projects', 'start_date')) {
                $table->date('start_date')->after('description');
            }

            if (!Schema::hasColumn('projects', 'end_date')) {
                $table->date('end_date')->after('start_date');
            }

            if (!Schema::hasColumn('projects', 'status')) {
                $table->string('status')->after('end_date');
            }

            if (!Schema::hasColumn('projects', 'responsible_id')) {
                $table->foreignId('responsible_id')
                      ->nullable()
                      ->constrained('users')
                      ->nullOnDelete();
            }

            if (!Schema::hasColumn('projects', 'new_column_name')) {
                $table->string('new_column_name')->nullable();
            }
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            
        });
    }
};
