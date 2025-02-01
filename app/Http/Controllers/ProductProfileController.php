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
        return response()->json($item,200);
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
            'web_link' => 'required|url',
            'address' => 'required|string|max:255',
            'about' => 'required|string',
            'social_links' => 'nullable|array',
            'categoryId'=>'required|string',
            "tags" => 'required|array'
        ]);

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
            "tags" => json_encode($request->tags)
        ]);

        return response()->json($item, 200);
    }


    public function webProduct($id){
      if($id=="all"){
        $item = ProductProfile::with('category')->get();
        return response()->json($item,200);
      }else{
        $item = ProductProfile::Where("categoryId",$id)->with('category')->get();
        return response()->json($item,200);
      }
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
