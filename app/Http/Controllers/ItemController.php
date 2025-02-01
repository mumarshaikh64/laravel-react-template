<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PdfItems;

class ItemController extends Controller
{
    // Get all items
    public function index()
    {
        return response()->json(PdfItems::all(), 200);
    }

    // Store a new item
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'short_description' => 'required|string',
            'pdf' => 'nullable|mimes:pdf|max:2048' // File validation
        ]);

        // Handle file upload
        $pdfPath = null;
        if ($request->hasFile('pdf')) {
            $pdfPath = $request->file('pdf')->store('pdfs', 'public');
        }

        $item = PdfItems::create([
            'name' => $request->name,
            'short_description' => $request->short_description,
            'pdf' => $pdfPath
        ]);

        return response()->json($item, 200);
    }

    // Show a single item
    public function show($id)
    {
        $item = PdfItems::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        return response()->json($item);
    }

    // Update an item
    public function update(Request $request, $id)
    {
        $item = PdfItems::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'short_description' => 'sometimes|required|string',
            'pdf' => 'nullable|mimes:pdf|max:2048'
        ]);

        if ($request->hasFile('pdf')) {
            if ($item->pdf) {
                Storage::disk('public')->delete($item->pdf);
            }
            $item->pdf = $request->file('pdf')->store('pdfs', 'public');
        }

        $item->update($request->only(['name', 'short_description']));

        return response()->json($item);
    }

    // Delete an item
    public function destroy($id)
    {
        $item = PdfItems::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        if ($item->pdf) {
            Storage::disk('public')->delete($item->pdf);
        }

        $item->delete();

        return response()->json(['message' => 'Item deleted']);
    }
}
