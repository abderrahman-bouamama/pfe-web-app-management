<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    });
});

/*
|--------------------------------------------------------------------------
| Routes admin
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/AdminDashboard');
    })->name('dashboard');

    Route::get('/employees', function () {
        return Inertia::render('Admin/Employees');
    })->name('employees');

    Route::get('/projects', function () {
        return Inertia::render('Admin/Projects');
    })->name('projects');

    Route::get('/tasks', function () {
        return Inertia::render('Admin/Tasks');
    })->name('tasks');

    Route::get('/trainings', function () {
        return Inertia::render('Admin/Trainings');
    })->name('trainings');

    Route::get('/certificates', function () {
        return Inertia::render('Admin/Certificates');
    })->name('certificates');
});
Route::middleware(['auth'])->get('/employee/certificates', function () {
    return Inertia::render('Employee/Certificates');
})->name('employee.certificates');


/*
|--------------------------------------------------------------------------
| Auth (login, register)
|--------------------------------------------------------------------------
*/

require __DIR__.'/auth.php';
