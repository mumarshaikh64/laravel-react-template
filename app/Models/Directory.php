<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directory extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'uri',
        'children',
    ];

    // protected $casts = [
    //     'children' => 'array',  // Cast 'children' column to array
    // ];

    // public function parent()
    // {
    //     return $this->hasMany(Directory::class, 'children');
    // }

    public function parent()
    {
        return $this->belongsTo(Directory::class, 'children');
    }

    // Define the children relationship
    public function children12()
    {
        return $this->hasMany(Directory::class, 'children');
    }
}
