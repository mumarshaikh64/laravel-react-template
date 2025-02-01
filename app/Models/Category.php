<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'uri',
        'file_path',
        'status'
    ];

    public function productProfiles()
    {
        return $this->hasMany(ProductProfile::class);
    }

}
