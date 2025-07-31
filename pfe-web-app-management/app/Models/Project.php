<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'description',
        'start_date',
        'end_date',
        'status',
        'responsible_id',
    ];

    // Un projet appartient à un responsable (User)
    public function responsible()
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }
    // Un projet peut avoir plusieurs tâches
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
    public function client()
{
    return $this->belongsTo(Client::class);
}


}

