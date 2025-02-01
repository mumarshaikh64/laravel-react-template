<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blogs extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'value',
        'tags',
        'image_path',
        'short_description',
        'author_id',
    ];

    protected $casts = [
        'tags' => 'array', // Cast the tags JSON column to an array
    ];

}
