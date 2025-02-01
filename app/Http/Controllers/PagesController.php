<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\Contact;

class PagesController extends Controller
{


    public function getAllPages()
    {
        $pages = Page::all();
        
        return response()->json($pages);
    }

    public function getPageByUri($uri)
    {
        $pages = Page::Where('uri','/'.$uri)->get();
        $cleanedPath = ltrim($pages[0]->content, '/storage/');
        // dd($cleanedPath);
        $htmlContent = Storage::disk('public')->get('e'.$cleanedPath);
        $pages[0]->content = $htmlContent;
        return response()->json($pages);
    }

    public function getContact(){
        $all = Contact::all();
        dd($all);
        return response()->json($all);
    }
    public function getPageById($id)
    {
        $pages = Page::find($id);
        // dd($htmlContent);
        // $htmlContent = Storage::get('exports/'.$pages->content);
        return response()->json($pages);
    }


    public function store(Request $request)
    {
        try {
            if ($request->hasFile('html')) {
                $file = $request->file('html');
                $folderName = 'exports';
                if (!Storage::disk('public')->exists($folderName)) {
                    Storage::disk('public')->makeDirectory($folderName);
                }
                $uniqueFileName = $request->title . '-' . time() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/' . $folderName, $uniqueFileName);
                $data = [
                    "title" => $request->title,
                    "content" => Storage::url($folderName . '/' . $uniqueFileName),
                    'uri' => $request->uri,
                ];
                $page = Page::create($data);
                return response()->json([
                    'success' => true,
                    'message' => 'Post created successfully.',
                    'data' => $page,
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to create post.',
                ], 404);
            }
        } catch (\Exception $e) {
            // Handle any exceptions
            return response()->json([
                'success' => false,
                'message' => 'Failed to create post.',
                'error' => $e->getMessage(),
            ], 500); // HTTP status 500: Internal Server Error
        }
    }



    public function update(Request $request, $id)
    {
        try {
            $page = Page::findOrFail($id);
            if ($request->hasFile('html')) {

                $oldFilePath = str_replace('storage', 'public', $page->content); // Assuming content holds the path to the file
                if (Storage::disk('public')->exists($oldFilePath)) {
                    Storage::disk('public')->delete($oldFilePath);
                }
                $file = $request->file('html');
                $folderName = 'exports';
                if (!Storage::disk('public')->exists($folderName)) {
                    Storage::disk('public')->makeDirectory($folderName);
                }
                $uniqueFileName = $request->title . '-' . time() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/' . $folderName, $uniqueFileName);
                $data['content'] = Storage::url($folderName . '/' . $uniqueFileName);
            }
            $data['title'] = $request->title;
            $data['uri'] = $request->uri;
            $page->update($data);
            return response()->json([
                'success' => true,
                'message' => 'Post updated successfully.',
                'data' => $page,
            ], 200);
        } catch (\Exception $e) {
            // Handle any exceptions
            return response()->json([
                'success' => false,
                'message' => 'Failed to update post.',
                'error' => $e->getMessage(),
            ], 500); // HTTP status 500: Internal Server Error
        }
    }




    public function delete($id)
    {
        $page = Page::find($id);
        if ($page) {
            $page->delete();
            return response()->json([
                'message' => 'Page deleted successfully.'
            ]);
        } else {
            return response()->json([
                'error' => 'Page not found.'
            ], 404);
        }
    }


    public function approve(Request $request){
        // Validate the request
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'status' => 'required|in:1,0', // Ensure only valid statuses are allowed
    ]);

    // Find the user
    $user = User::find($request->user_id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // Update the user status
    $user->status = $request->status;
    $user->save();

    return response()->json(['message' => 'User status updated successfully!', 'user' => $user], 200);
}
}
