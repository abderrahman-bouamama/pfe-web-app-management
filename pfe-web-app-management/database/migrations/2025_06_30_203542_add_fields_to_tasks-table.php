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
                if (!Schema::hasColumn('tasks', 'responsible_id')) {
                    $table->foreignId('responsible_id')
                          ->nullable()
                          ->constrained('users')
                          ->nullOnDelete()->after('project');
                }
                if (!Schema::hasColumn('tasks', 'status')) {
                    $table->string('status')->nullable()->after('responsible_id');
                }
    
                if (!Schema::hasColumn('tasks', 'descritpion')) {
                    $table->date('descritpion');
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
