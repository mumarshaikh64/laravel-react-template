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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('deposit_from', 10, 2)->nullable();
            $table->decimal('deposit_to', 10, 2)->nullable();
            $table->decimal('price', 10, 2);
            $table->text('short_description')->nullable();
            $table->json('list_text')->nullable();
            $table->string("type")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
