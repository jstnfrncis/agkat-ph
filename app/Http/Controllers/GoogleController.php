<?php

namespace App\Http\Controllers;

use App\Models\SocialLogin;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User; // Import the User model
use Illuminate\Support\Facades\Auth; // Import the Auth facade
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callbackGoogle()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();
        
        // Check if the user already exists in the database
        $user = User::where('email', $googleUser->getEmail())->first();
        
        if (!$user) {
            // Register the user if not already registered
            $user = User::create([
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'google_id' => $googleUser->getId(),
                // Optionally, store other fields like avatar, etc.
            ]);
        }

        // Log the user in
        Auth::login($user);

        // Redirect to the explore page using Inertia
        return Inertia::render('ExplorePage', [
            'user' => $user,  // Pass any data if needed
        ]);
    }
}