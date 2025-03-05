<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends Controller
{
       // Get all products
       public function index()
       {
           return response()->json(Product::all(), 200);
       }
   
       // Store a new product
       public function store(Request $request)
       {
           $validated = $request->validate([
               'name' => 'required|string|max:255',
               'deposit_from' => 'nullable|numeric',
               'deposit_to' => 'nullable|numeric',
               'price' => 'required|numeric',
               'short_description' => 'nullable|string',
               'list_text' => 'nullable|array',
               'type'=> "nullable|string",
           ]);
   
           $product = Product::create($validated);
           return response()->json($product, 200);
       }
   
       // Get a single product
       public function show($id)
       {
           $product = Product::find($id);
           if (!$product) {
               return response()->json(['message' => 'Product not found'], 404);
           }
           return response()->json($product, 200);
       }
   
       // Update a product
       public function submitForm(Request $request)
       { 
           $id = $request->id;
        //    dd($request->all());
           $product = Product::find($id);
           if (!$product) {
               return response()->json(['message' => 'Product not found'], 404);
           }
   
           $validated = $request->validate([
               'name' => 'sometimes|string|max:255',
               'deposit_from' => 'nullable|numeric',
               'deposit_to' => 'nullable|numeric',
               'price' => 'sometimes|numeric',
               'short_description' => 'nullable|string',
               'list_text' => 'nullable|array',
               'type'=> "nullable|string",
           ]);
   
           $product->update($validated);
           return response()->json($product, 200);
       }
   
       // Delete a product
       public function destroy($id)
       {
        return response()->json(['message' => 'Product not found'], 404);
           $product = Product::find($id);
           if (!$product) {
               return response()->json(['message' => 'Product not found'], 404);
           }
           $product->delete();
           return response()->json(['message' => 'Product deleted'], 200);
       }
   
}
