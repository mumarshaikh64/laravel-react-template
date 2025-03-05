<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Define the admin routes
// Route::prefix('admin')->group(function () {

Route::get('generate', function (){
  \Illuminate\Support\Facades\Artisan::call('storage:link');
  echo 'ok';
});
Route::get('/admin{any}', function () {
  // dd("ddd");
  return view('admin');
})->where('any', '.*');
// });

// Define the catch-all route for the user frontend
Route::get('/{any}', function () {
  return view('app');
})->where('any', '.*');
