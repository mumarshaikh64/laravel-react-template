<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blogs;

class BlogsController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'value' => 'nullable|string',
            'tags' => 'nullable|string',
            'short_description'=>'required|string',
            'image' => 'nullable|file|mimes:jpg,png,gif|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('uploads', 'public');
        }

        $item = Blogs::create([
            'name' => $validated['name'],
            'value' => $validated['value'] ?? null,
            'tags' => $validated['tags'] ?? json_encode([]),
            'image_path' => $imagePath,
            'author_id'=>1,
            'short_description'=>$validated['short_description']
        ]);

        return response()->json([
            'success' => true,
            'data' => $item,
        ],200);
    }

    public function index()
    {
        $items = Blogs::all();
        return response()->json($items);
    }

    public function show($id)
    {
        $item = Blogs::findOrFail($id);
        return response()->json($item);
    }

    public function update(Request $request, $id)
    {
        $item = Blogs::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'value' => 'nullable|string',
            'tags' => 'nullable|array',
            'image' => 'nullable|file|mimes:jpg,png,gif|max:2048',
        ]);

        $imagePath = $item->image_path;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('uploads', 'public');
        }

        $item->update([
            'name' => $validated['name'],
            'value' => $validated['value'] ?? $item->value,
            'tags' => $validated['tags'] ?? $item->tags,
            'image_path' => $imagePath,
        ]);

        return response()->json([
            'success' => true,
            'data' => $item,
        ]);
    }

    public function destroy($id)
    {
        $item = Blogs::findOrFail($id);
        $item->delete();

        return response()->json(['success' => true]);
    }

}
