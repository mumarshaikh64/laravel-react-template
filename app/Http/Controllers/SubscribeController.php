<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscriber;
use Illuminate\Support\Facades\Mail;
use App\Mail\SubscriptionMail;

class SubscribeController extends Controller
{

    public function index(){
        $subscriber = Subscriber::all();
        return response()->json($subscriber);
    }


    public function create(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'content' => 'required|string'
        ]);
        $email = $request->email;
        $name = $request->name;
        $subscriber = Subscriber::create([
            'email' => $request->email,
            'content' => $request->content
        ]);
        // Send Email
        Mail::to($email)->send(new SubscriptionMail($name));
        return response()->json(['message' => 'Subscription successful. Check your email!']);
    }

}
