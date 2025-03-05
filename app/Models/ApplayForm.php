<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplayForm extends Model
{
    use HasFactory;
    protected $fillable = [
        'first_name', 'last_name', 'business_name', 'address', 'postal_code',
        'country', 'phone_number', 'email', 'email_confirm', 'username_type',
        'login_email', 'login_username', 'website', 'facebook_page', 'twitter',
        'linkedin', 'instagram', 'pinterest', 'youtube', 'tiktok', 'telegram',
        'course_titles', 'course_provision', 'course_provision_other',
        'request_case_studies', 'case_studies_why', 'how_mark', 'qualifications',
        'comments', 'keywords', 'accept_terms',
    ];

    protected $casts = [
        'course_provision' => 'array',
        'request_case_studies' => 'boolean',
        'accept_terms' => 'boolean',
    ];
}
