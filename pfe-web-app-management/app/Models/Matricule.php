<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matricule extends Model
{
    public function user()
{
    return $this->hasOne(User::class);
}

}
