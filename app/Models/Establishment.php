<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Establishment extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'address', 'cover_photo', 'sale_section_photo'];

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
