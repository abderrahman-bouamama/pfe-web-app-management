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
        {
            Schema::table('tasks', function (Blueprint $table) {
                if (!Schema::hasColumn('tasks', 'title')) {
                    $table->text('title')->nullable();
                }
                
                if (!Schema::hasColumn('tasks', 'project')) {
                    $table->text('project')->nullable()->after('title');
                }
    
                if (!Schema::hasColumn('tasks', 'descritpion')) {
                    $table->date('descritpion')->after('project');
                }
    
                if (!Schema::hasColumn('tasks', 'start_date')) {
                    $table->date('start_date')->after('descritpion');
                }
    
                if (!Schema::hasColumn('tasks', 'end_date')) {
                    $table->string('end_date')->after('start_date');
                }
                if (!Schema::hasColumn('tasks', 'status')) {
                    $table->string('status')->nullable()->after('end_date');
                }
    
                if (!Schema::hasColumn('tasks', 'responsible_id')) {
                    $table->foreignId('responsible_id')
                          ->nullable()
                          ->constrained('users')
                          ->nullOnDelete();
                }
    
                
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
