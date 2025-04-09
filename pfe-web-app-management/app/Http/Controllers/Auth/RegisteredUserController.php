<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Matricule;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
 public function store(Request $request): RedirectResponse
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255|unique:users',
        'matricule' => 'required|string|exists:matricules,code',
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);

    // Vérifie que le matricule n’a pas déjà été utilisé
    $matricule = Matricule::where('code', $request->matricule)->first();

    if ($matricule->used) {
        return back()->withErrors(['matricule' => 'Ce matricule est déjà utilisé.']);
    }

    // Création de l'utilisateur
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'matricule' => $request->matricule,
        'password' => Hash::make($request->password),
    ]);

    // Marquer le matricule comme utilisé
    $matricule->used = true;
    $matricule->save();

    event(new Registered($user));

    Auth::login($user);

    return redirect(route('dashboard', absolute: false));
}





}