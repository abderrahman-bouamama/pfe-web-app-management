<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\AdminDashboardController;

/*
|--------------------------------------------------------------------------
| Routes publiques
|--------------------------------------------------------------------------
*/
Route::get('/', fn() => Inertia::render('Home'))->name('home');
Route::get('/about', fn() => Inertia::render('About'))->name('about');
Route::get('/services', fn() => Inertia::render('Services'))->name('services');
Route::get('/projects', fn() => Inertia::render('Projects'))->name('projects');
Route::get('/clients', fn() => Inertia::render('Clients'))->name('clients');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');

/*
|--------------------------------------------------------------------------
| Routes employés (authentifiés)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

    Route::prefix('employee')->group(function () {
        Route::get('/my-projects', fn() => Inertia::render('Employee/MyProjects'))->name('employee.my-projects');
        Route::get('/work-days', fn() => Inertia::render('Employee/WorkDays'))->name('employee.work-days');
        Route::get('/leaves', fn() => Inertia::render('Employee/Leaves'))->name('employee.leaves');
        Route::get('/annual-vacation', fn() => Inertia::render('Employee/AnnualVacation'))->name('employee.annual-vacation');
        Route::get('/salary-bonuses', fn() => Inertia::render('Employee/SalaryAndBonuses'))->name('employee.salary-bonuses');
        Route::get('/training', fn() => Inertia::render('Employee/Training'))->name('employee.training');
        Route::get('/tasks', fn() => Inertia::render('Employee/Tasks'))->name('employee.tasks');
        Route::get('/team', fn() => Inertia::render('Employee/Team'))->name('employee.team');
        Route::get('/materielattribue', fn() => Inertia::render('Employee/MaterielAttribue'))->name('employee.MaterielAttribue');
        Route::get('/certificates', fn() => Inertia::render('Employee/Certificates'))->name('employee.certificates');
    });
});

/*
|--------------------------------------------------------------------------
| Routes admin
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
   Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    
  
    
    Route::get('/employees', [UserController::class, 'index'])->name('employees');

    Route::get('/tasks', fn() => Inertia::render('Admin/Tasks'))->name('tasks');
    Route::get('/trainings', fn() => Inertia::render('Admin/Trainings'))->name('trainings');
    Route::get('/certificates', fn() => Inertia::render('Admin/Certificates'))->name('certificates');

    // Projets
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    Route::put('/projects/{project}', [ProjectController::class, 'update'])->name('projects.update');

    // Utilisateurs
    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
});


/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/
require __DIR__.'/auth.php';
