<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'status'];

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
