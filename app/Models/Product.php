<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'deposit_from', 'deposit_to', 'price', 'short_description', 'list_text'
    ];

    protected $casts = [
        'list_text' => 'array', // Cast list_text to JSON array
    ];
}
