<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

   protected $fillable = [
    'name',
    'email',
    'matricule',
    'password',
];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    //  Relations

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

   

   
    public function certificates()
    {
        return $this->hasMany(Certificate::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    // Un utilisateur peut être responsable de plusieurs projets
    public function managedProjects()
    {
        return $this->hasMany(Project::class, 'responsible_id');
    }
    
    // Un utilisateur peut avoir plusieurs tâches assignées
    public function tasks()
    {
        return $this->hasMany(Task::class, 'assigned_to');
    }
    // Une Utilisateur peut avoir plusieur certificats
    public function trainings()
    {
        return $this->belongsToMany(Training::class)->withTimestamps();
    }
    public function matricule()
    {
        return $this->belongsTo(Matricule::class);
    }   


    






}
