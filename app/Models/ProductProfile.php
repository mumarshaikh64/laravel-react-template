<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Category;
class ProductProfile extends Model
{
    use HasFactory;

     // Allow mass assignment for these fields
     protected $fillable = [
        'name',
        'destination',
        'email',
        'number',
        'level',
        'web_link',
        'address',
        'about',
        'categoryId',
        'social_links',
        'tags',
        'course_name',
        'logo'
    ];

    // Optionally, you can cast attributes like social_links to array
    protected $casts = [
        'social_links' => 'array', // Automatically casts social_links to an array when retrieved,
        'tags' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class,'categoryId');
    }
}
