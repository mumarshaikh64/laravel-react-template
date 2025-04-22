<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductProfile;
class ProductProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $item = ProductProfile::with('category')->get();
        return response()->json($item, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'destination' => 'required|string|max:255',
            'email' => 'required|email',
            'number' => 'required|string|max:20',
            'level' => 'required|string|max:50',
            // 'web_link' => 'required|url',
            'address' => 'required|string|max:255',
            'about' => 'required|string',
            // 'social_links' => 'nullable|array',
            'categoryId' => 'required|string',
            // "course_name" => 'required|string'
        ]);


        $logoPath = null;
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public'); // Store in storage/app/public/logos
        }
        dd($request->file('logo'));
        $item = ProductProfile::create([
            'name' => $request->name,
            'destination' => $request->destination,
            'email' => $request->email,
            'number' => $request->number,
            'level' => $request->level,
            'web_link' => $request->web_link,
            'address' => $request->address,
            'about' => $request->about,
            "categoryId" => $request->categoryId,
            'social_links' => json_encode($request->social_links),
            // "course_name" => $request->course_name,
            "tags" => json_encode($request->tags),
            'logo' => $logoPath, // Store path in DB
        ]);

        return response()->json($item, 200);
    }

    public function webProductSearch($value)
    {
        $query = ProductProfile::with('category')
            ->where('name', 'LIKE', "%{$value}%")
            ->orWhere('destination', 'LIKE', "%{$value}%")
            ->orWhere('email', 'LIKE', "%{$value}%")
            ->orWhere('number', 'LIKE', "%{$value}%")
            ->orWhere('level', 'LIKE', "%{$value}%")
            ->orWhere('web_link', 'LIKE', "%{$value}%")
            ->orWhere('address', 'LIKE', "%{$value}%");
        $items = $query->get(); // Fetch the results
        return response()->json($items, 200);
    }


    public function webProduct($id)
    {
        if ($id == "all") {
            $item = ProductProfile::with('category')->get();
            return response()->json($item, 200);
        } else {
            $item = ProductProfile::Where("categoryId", $id)->with('category')->get();
            return response()->json($item, 200);
        }
    }

    public function getById($id)
    {
        $product = ProductProfile::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        return response()->json($product, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'destination' => 'sometimes|string|max:255',
            'email' => 'sometimes|email',
            'number' => 'sometimes|string|max:20',
            'level' => 'sometimes|string|max:50',
            'web_link' => 'sometimes|url',
            'address' => 'sometimes|string|max:255',
            'about' => 'sometimes|string',
            'social_links' => 'nullable|array',
            'categoryId' => 'sometimes|string',
            // "course_name" => 'sometimes|string'
        ]);

        // Find the product by ID
        $item = ProductProfile::find($id);

        if (!$item) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Update fields dynamically
        $item->update([
            'name' => $request->name ?? $item->name,
            'destination' => $request->destination ?? $item->destination,
            'email' => $request->email ?? $item->email,
            'number' => $request->number ?? $item->number,
            'level' => $request->level ?? $item->level,
            'web_link' => $request->web_link ?? $item->web_link,
            'address' => $request->address ?? $item->address,
            'about' => $request->about ?? $item->about,
            'categoryId' => $request->categoryId ?? $item->categoryId,
            'social_links' => $request->social_links ? json_encode($request->social_links) : $item->social_links,
            "tags" => $request->tags ? json_encode($request->tags) : $item->tags,
            // "course_name" => $request->course_name ?? $item->course_name
        ]);

        return response()->json($item, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = ProductProfile::find($id);

        // Check if the product exists
        if (!$item) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Delete the product
        $item->delete();

        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}
