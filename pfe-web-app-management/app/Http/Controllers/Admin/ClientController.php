<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Clients', [
            'clients' => Client::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/CreateClient');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'nullable|email',
            'phone' => 'nullable|string|max:20',
            'company' => 'nullable|string|max:255',
        ]);

        Client::create($validated);

        return redirect()->route('admin.clients')->with('success', 'Client ajouté avec succès.');
    }
}
