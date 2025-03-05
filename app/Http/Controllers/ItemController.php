<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PdfItems;
use Illuminate\Support\Facades\Storage;


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
        // Validate input
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'short_description' => 'sometimes|string',
            'pdf' => 'nullable|mimes:pdf|max:2048' // Optional PDF update
        ]);
    
        // Find the existing record
        $item = PdfItems::find($id);
        if (!$item) {
            return response()->json(['message' => 'PDF item not found'], 404);
        }
    
        // Handle file upload if a new PDF is provided
        if ($request->hasFile('pdf')) {
            // Delete old file if exists
            if ($item->pdf) {
                Storage::disk('public')->delete($item->pdf);
            }
            // Store new file
            $item->pdf = $request->file('pdf')->store('pdfs', 'public');
        }
    
        // Update other fields
        $item->update([
            'name' => $request->name ?? $item->name,
            'short_description' => $request->short_description ?? $item->short_description,
            'pdf' => $item->pdf
        ]);
    
        return response()->json($item, 200);
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
