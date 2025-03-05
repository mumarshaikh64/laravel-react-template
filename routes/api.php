<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CertificateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DirectoryController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductProfileController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SubscribeController;
use App\Http\Controllers\ContactApiController;





use App\Models\Page;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('productUpdate', [ProductController::class, 'submitForm']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('postcontact', [ContactApiController::class, 'submitForm']);

// Route::group(["prefix"=>"contact"],function(){
//     Route::get('/', [ContactApiController::class, 'index']);

// });
Route::group(['prefix' => 'directories'], function () {
    Route::get("/", [DirectoryController::class, 'index']);
    Route::post("/store", [DirectoryController::class, 'store']);
    Route::get("/web", [DirectoryController::class, 'showWeb']);
    Route::get("/event", [DirectoryController::class, 'getEvents']);
});

Route::group(['prefix' => 'pages'], function () {
    Route::get("/", [PagesController::class, 'getAllPages']);
    Route::post("/store", [PagesController::class, 'store']);
    Route::get("/web", [DirectoryController::class, 'showWeb']);
    Route::get("/delete/{id}", [PagesController::class, 'delete']);
    Route::get("/{id}", [PagesController::class, 'getPageById']);
    Route::get("/content/{uri}", [PagesController::class, 'getPageByUri']);
    Route::post("/update-page/{id}", [PagesController::class, 'update']);
    Route::get('/contact', [PagesController::class, 'getContact']);
    Route::post("/user/approve",[PagesController::class, 'approve']);
});


Route::group(['prefix' => 'certificate'], function () {
    Route::get("/", [CertificateController::class, 'index']);
    Route::post("/store", [CertificateController::class, 'create']);
});



Route::group(['prefix' => 'applayForm'], function () {
    Route::get("/", [CertificateController::class, 'index']);
    Route::post("/store", [CertificateController::class, 'create']);
});

Route::group(['prefix' => 'subscribe'], function () {
    Route::get("/", [SubscribeController::class, 'index']);
    Route::post("/store", [SubscribeController::class, 'create']);
});



Route::group(['prefix' => 'users'], function () {
    Route::get("/", [AuthController::class, 'getAllUser']);
});


Route::group(['prefix' => 'category'], function () {
    Route::get("/", [CategoryController::class, 'index']);
    Route::get("/web", [CategoryController::class, 'index']);
    Route::post('/update/{id}', [CategoryController::class, 'update']);  // Update a product
    Route::delete('/{id}', [CategoryController::class, 'destroy']);  // Delete a product
    Route::post("/store", [CategoryController::class, 'store']);
});

Route::group(['prefix' => 'product'], function () {
    Route::get("/", [ProductProfileController::class, 'index']);
    Route::get("/{id}", [ProductProfileController::class, 'getById']);
    Route::get("/web/{id}", [ProductProfileController::class, 'webProduct']);
    Route::get("/search/{value}", [ProductProfileController::class, 'webProductSearch']);
    Route::post("/store", [ProductProfileController::class, 'store']);
    Route::put('/{id}', [ProductProfileController::class, 'update']);
    Route::delete('/{id}', [ProductProfileController::class, 'destroy']);

});


Route::group(['prefix' => 'Event'], function () {
    Route::get("/", [EventController::class, 'index']);
    Route::get("/{id}", [EventController::class, 'show']);
    Route::post("/store", [EventController::class, 'store']);
});

Route::group(['prefix' => 'planProduct'], function () {
    Route::get('/', [ProductController::class, 'index']);   // Fetch all products
    Route::post('/store', [ProductController::class, 'store']);  // Create a new product
    Route::get('delep/{id}', [ProductController::class, 'destroy']);  // Delete a product
    Route::get('/{id}', [ProductController::class, 'show']);  // Get a single product
      // Update a product
});

Route::group(['prefix' => 'pdf'], function () {
    Route::get('/', [ItemController::class, 'index']);   // Fetch all products
    Route::post('/store', [ItemController::class, 'store']);  // Create a new product
    Route::get('/{id}', [ItemController::class, 'show']);  // Get a single product
    Route::put('/{id}', [ItemController::class, 'update']);  // Update a product
    Route::delete('/{id}', [ItemController::class, 'destroy']);  // Delete a product
});

Route::group(['prefix' => 'blogs'], function () {
    Route::get("/", [BlogsController::class, 'index']);
    Route::post("/store", [BlogsController::class, 'store']);
    Route::get("/web", [BlogsController::class, 'index']);
    Route::get("/delete/{id}", [BlogsController::class, 'destroy']);
    Route::get("/{id}", [BlogsController::class, 'show']);
    Route::post("/update-page/{id}", [BlogsController::class, 'update']);
});

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::get('me', [AuthController::class, 'me']);
Route::middleware('auth:api')->post('logout', [AuthController::class, 'logout']);


// Route::apiResource('directories', DirectoryController::class);