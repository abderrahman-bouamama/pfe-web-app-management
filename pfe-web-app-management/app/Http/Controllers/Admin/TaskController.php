<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    // Afficher la page des tâches (liste)
    public function index()
{
    return Inertia::render('Admin/Tasks', [
        'tasks' => Task::with(['project', 'responsible'])->get(),
        'projects' => Project::select('id', 'title')->get(),
        'users' => User::select('id', 'name')->get(),
    ]);
}

    // Afficher le formulaire de création
    public function create()
    {
        return Inertia::render('Admin/CreateTaskForm', [
            'projects' => Project::select('id', 'title')->get(),
            'users' => User::select('id', 'name')->get(),
        ]);
    }

    // Enregistrer une tâche
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'status' => 'required|string',
            'project_id' => 'required|exists:projects,id',
            'responsible_id' => 'nullable|exists:users,id',
        ]);

        Task::create($validated);

        return redirect()->route('admin.tasks')->with('success', 'Tâche créée avec succès.');
    }
}
