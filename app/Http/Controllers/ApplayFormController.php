<?php

namespace App\Http\Controllers;

use App\Models\ApplayForm;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;

class ApplayFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'email' => 'required|email|unique:form_data,email',
                'accept_terms' => 'required|boolean',
            ]);
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
            $charge = Charge::create([
                "amount" => 5000, // Amount in cents ($50.00)
                "currency" => "usd",
                "source" => $token,
                "description" => "UHPC Membership Form Submit Fee"
            ]);
            $formData = ApplayForm::create($request->all());
            return response()->json([
                "success" => true,
                "charge" => $charge
            ],201);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "error" => $e->getMessage()
            ],400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ApplayForm $applayForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ApplayForm $applayForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ApplayForm $applayForm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ApplayForm $applayForm)
    {
        //
    }
}




