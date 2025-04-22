<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $item = Category::all();
        return response()->json($item,200);
    }

   

    public function store(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'uri' => 'required|string|max:255',
            "type"=>'required|string|max:255',
            // 'file' => 'nullable|file|mimes:jpg,png,gif,svg|max:2048',
        ]);
    
        // Return validation errors if any
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors(),
            ], 422);
        }
    
        try {
            $filePath = 'uploads/images.jpeg'; // Make sure this file exists in your storage
            // Handle file upload
            if ($request->hasFile('file')) {
                $filePath = $request->file('file')->store('uploads', 'public');
            }
    
            // Create the item
            $item = Category::create([
                'title' => $request->title,
                'uri' => $request->uri,
                'type'=>$request->type,
                'file_path' => $filePath,
                'status' => $request->status ?? true,
            ]);
    
            // Return a success response with the created item
            return response()->json([
                'success' => true,
                'message' => 'Item created successfully.',
                'data' => $item,
            ], 200);
        } catch (\Exception $e) {
            // Return an error response in case of any exception
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while creating the item.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //   Validate the request data
    $validator = Validator::make($request->all(), [
        'title' => 'required|string|max:255',
        'uri' => 'required|string|max:255',
        'file' => 'nullable|file|mimes:jpg,png,gif,svg|max:2048',
    ]);

    // Return validation errors if any
    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'errors' => $validator->errors(),
        ], 422);
    }

    try {
        // Find the category by ID
        $category = Category::findOrFail($id);

        // Handle file upload if a new file is provided
        if ($request->hasFile('file')) {
            // Delete the old file if exists
            if ($category->file_path) {
                Storage::disk('public')->delete($category->file_path);
            }

            // Store the new file
            $filePath = $request->file('file')->store('uploads', 'public');
            $category->file_path = $filePath;
        }

        // Update the category details
        $category->update([
            'title' => $request->title,
            'uri' => $request->uri,
            'type'=>$request->type,
            'status' => $request->status ?? true,
        ]);

        // Return a success response with the updated item
        return response()->json([
            'success' => true,
            'message' => 'Item updated successfully.',
            'data' => $category,
        ], 200);
    } catch (\Exception $e) {
        // Return an error response in case of any exception
        return response()->json([
            'success' => false,
            'message' => 'An error occurred while updating the item.',
            'error' => $e->getMessage(),
        ], 500);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Category::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        
        if ($item->file_path) {
            Storage::disk('public')->delete($item->file_path);
        }

        $item->delete();

        return response()->json(['message' => 'Item deleted']);
    }
}
