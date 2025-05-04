<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Models\User; 
use Inertia\Inertia;
use App\Models\Client;


class ProjectController extends Controller
{
   public function index()
{
    return Inertia::render('Admin/Projects', [
        'projects' => Project::with('responsible')->get(),
        'users' => User::select('id', 'name')->get(),
        'clients' => Client::all(),
    ]);
}


    
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'start_date' => 'required|date',
        'end_date' => 'required|date|after_or_equal:start_date',
        'status' => 'required|string',
        'responsible_id' => 'nullable|exists:users,id',
        'client_id' => 'nullable|exists:clients,id',
    ]);

    Project::create($validated);

    return redirect()->route('admin.projects')->with('success', 'Projet ajouté avec succès.');
}
    public function update(Request $request, Project $project)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'start_date' => 'required|date',
        'end_date' => 'required|date|after_or_equal:start_date',
        'status' => 'required|string',
        'responsible_id' => 'nullable|exists:users,id',
        'client_id' => 'nullable|exists:clients,id',
    ]);

    $project->update($validated);

    return redirect()->route('admin.projects')->with('success', 'Projet mis à jour.');
}


    public function destroy(Project $project)
    {
        $project->delete();

        return redirect()->back()->with('success', 'Projet supprimé.');
    }
}
