<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'featured_image',
        'start_date',
        'end_date',
        'content',
        'webLink',
        'email',
        'username'
    ];

}
