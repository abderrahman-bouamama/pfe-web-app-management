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
    // Liste des tâches
    public function index()
    {
        return Inertia::render('Admin/Tasks', [
            'tasks' => Task::with(['project:id,title', 'user:id,name'])->get(),
            'projects' => Project::select('id', 'title')->get(),
            'users' => User::select('id', 'name')->get(),
        ]);
    }

    // Formulaire de création
    public function create()
    {
        return Inertia::render('Admin/CreateTaskForm', [
            'projects' => Project::select('id', 'title')->get(),
            'users' => User::select('id', 'name')->get(),
        ]);
    }

    // Enregistrement d'une nouvelle tâche
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|string',
            'project_id' => 'required|exists:projects,id',
            'user_id' => 'required|exists:users,id',
        ]);

        Task::create($validated);

        return redirect()->route('admin.tasks.index')->with('success', 'Tâche créée avec succès.');
    }

    // Mise à jour d'une tâche
    public function update(Request $request, Task $task)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'status' => 'required|string',
            'project_id' => 'required|exists:projects,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $task->update($validated);

        return redirect()->route('admin.tasks.index')->with('success', 'Tâche mise à jour avec succès.');
    }

    // Suppression d'une tâche
    public function destroy(Task $task)
    {
        $task->delete();

        return redirect()->route('admin.tasks.index')->with('success', 'Tâche supprimée.');
    }
}
