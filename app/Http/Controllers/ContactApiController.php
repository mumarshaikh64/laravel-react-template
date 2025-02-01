<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmitted;


class ContactApiController extends Controller
{
    public function getContact(){
        $all = Contact::all();
        dd($all);
        return response()->json($all);
    }
    public function submitForm(Request $request)
    {
        // Validate incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // Store the data in the database
        $contact = new Contact([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'message' => $validated['message'],
        ]);
         $contact->save();


        // Optionally, send an email to the admin
        Mail::to($validated['email'])->send(new ContactFormSubmitted($contact));

        // Return a success response
        return response()->json(['message' => 'Your message has been sent!'], 200);
    }
}
