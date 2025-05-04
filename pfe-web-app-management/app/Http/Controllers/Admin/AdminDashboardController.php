<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Project;
use Inertia\Inertia;
use App\Models\Client;


class AdminDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/AdminDashboard', [
            'stats' => [
                'clients' => Client::count(),
                'projects' => Project::count(),
                'personnels' => User::where('role', 'employee')->count(),
                'chefsProjet' => User::where('role', 'chef_projet')->count(),
            ],
            'projects' => Project::latest()->take(5)->get(['id', 'name', 'chef', 'status', 'contact']),
        ]);
    }
}
