<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applay_forms', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('business_name')->nullable();
            $table->text('address')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email')->unique();
            $table->string('email_confirm')->nullable();
            $table->string('username_type')->default('contact_email');
            $table->string('login_email')->nullable();
            $table->string('login_username')->nullable();
            $table->string('website')->nullable();
            $table->string('facebook_page')->nullable();
            $table->string('twitter')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('instagram')->nullable();
            $table->string('pinterest')->nullable();
            $table->string('youtube')->nullable();
            $table->string('tiktok')->nullable();
            $table->string('telegram')->nullable();
            $table->string('photo')->nullable();
            $table->string('course_titles')->nullable();
            $table->json('course_provision')->nullable();
            $table->string('course_provision_other')->nullable();
            $table->boolean('request_case_studies')->default(false);
            $table->text('case_studies_why')->nullable();
            $table->string('how_mark')->nullable();
            $table->string('qualifications')->nullable();
            $table->text('comments')->nullable();
            $table->text('keywords')->nullable();
            $table->boolean('accept_terms')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applay_forms');
    }
};
