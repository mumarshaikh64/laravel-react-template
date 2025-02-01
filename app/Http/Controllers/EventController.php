<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::all();
        return response()->json([
            'success' => true,
            'data' => $events,
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'content' => 'nullable|string',
            'email' => 'nullable|string',
            'webLink' => 'nullable|string',
            "username"=>'nullable|string',

        ]);

        $imagePath = null;
        if ($request->hasFile('featured_image')) {
            $imagePath = $request->file('featured_image')->store('uploads', 'public');
        }

        $event = Event::create([
            'name' => $request->name,
            'featured_image' => $imagePath,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'content' => $request->content,
            'email' => $request->email,
            'webLink' => $request->webLink,
            'username'=>$request->username

        ]);

        return response()->json([
            'success' => true,
            'message' => 'Event created successfully!',
            'data' => $event,
        ], 200);
    }




    // Show a single item
    public function show($id)
    {
        $item = Event::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        return response()->json($item);
    }
}
