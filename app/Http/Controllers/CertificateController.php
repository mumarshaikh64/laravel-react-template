<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public function index()
    {
        $certificates = Certificate::all();
        return response()->json([
            "data"=>$certificates
        ],200);
    }

    public function create(Request $request)
    {
        // Validate the uploaded file
        // $request->validate([
        //     'pdf' => 'required|mimes:pdf|max:10240', // Max file size 10MB
        // ]);
        $name = $request->input("name");
        $userId = $request->input("user_id") ?? "";
        // Store the file
        $file = $request->file('pdf');
        $fileName = time() . '_' . $file->getClientOriginalName(); // Generate unique file name
        // Store the file in the 'certificates' directory
        $filePath = $file->storeAs('certificates', $fileName, 'public');
        $data = [
            "name" => $name,
            "user_id" => $userId,
            "pdf" => $filePath,
            "status" => 1,
        ];
        $certificate = Certificate::create($data);
        // Optionally store the path in the database or return it
        return response()->json([
            'message' => 'Create Certificate successfully!',
            'file_path' => asset('storage/' . $filePath),
            "certificate" => $certificate,
        ], 200);
    }
}
