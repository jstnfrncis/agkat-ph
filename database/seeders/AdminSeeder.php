<?php
 
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        try {
            Admin::factory()->create();
            $this->command->info('Admin user created successfully!');
        } catch (\Exception $e) {
            $this->command->error('Error seeding admin: ' . $e->getMessage());
        }
    }
}
