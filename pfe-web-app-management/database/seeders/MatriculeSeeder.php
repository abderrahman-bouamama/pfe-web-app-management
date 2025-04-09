<?php



namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MatriculeSeeder extends Seeder
{
    public function run(): void
    {
        $matricules = [];

        for ($i = 1; $i <= 99999; $i++) {
            $matricules[] = [
                'code' => 'SLM' . str_pad($i, 5, '0', STR_PAD_LEFT),
                'used' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // Insert par tranches pour éviter une surcharge mémoire
        foreach (array_chunk($matricules, 1000) as $chunk) {
            DB::table('matricules')->insert($chunk);
        }
    }
}
