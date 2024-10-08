<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArchivedEstablishment extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'email', 'description', 'address', 'cover_photo', 'sale_section_photo',
    ];
}
