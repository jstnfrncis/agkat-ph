<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'establishment_id',
        'comment',
        'food_rating',
        'service_rating',
        'cleanliness_rating',
        'price_rating'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function establishment()
    {
        return $this->belongsTo(Establishment::class);
    }

    public function photos()
    {
        return $this->hasMany(ReviewPhoto::class);
    }

}
