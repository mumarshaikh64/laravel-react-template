<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\JWT;
use Tymon\JWTAuth\Payload;


class AuthController extends Controller
{
    // Login function
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }


        $credentials = $request->only('email', 'password');
        //    dd($credentials);
        try {
            // if (!$token = JWTAuth::attempt($credentials, ['sub' => $user->id])) {
            //     return response()->json(['error' => 'Unauthorized'], 401);
            // }
            $token = JWTAuth::fromUser($user);

        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }

        return response()->json(compact('token'));
    }

    // Register function (optional)
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            "status"=>false,
        ]);

        $payload = [
            'sub' => $user->id,
            'name' => $user->name,
            'iat' => time(),
        ];

        // $payloadObject = Payload::fromArray($payload);

        $token = JWTAuth::claims($payload)->attempt([]);

        return response()->json(compact('user', 'token'));
    }

    // Get the authenticated user
    public function me(Request $request)
    {
        $token = $request->bearerToken(); // Or $request->header('Authorization')

    if (!$token) {
        return response()->json(['error' => 'Token not provided'], 400);
    }

    try {
        // Parse the token to get the payload
        $payload = JWTAuth::parseToken()->getPayload();

        // Retrieve the user ID from the decoded payload (the 'sub' claim typically contains the user ID)
        $userId = $payload->get('sub');
        
        $user = User::find($userId); // Find the user by ID

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Successfully authenticated the user
        return response()->json(['user' => $user], 200);

    } catch (JWTException $e) {
        // If there's an error with the token (invalid, expired, etc.)
        return response()->json(['error' => 'Token is invalid or expired'], 401);
    }
        // return response()->json(Auth::user());
    }

    // Logout function
    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Successfully logged out']);
    }


    public function getAllUser(){
        $users = User::all();
        return response()->json(['data' => $users]);
    }


    
}
