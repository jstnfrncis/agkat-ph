<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User; // Import the User model
use Illuminate\Support\Facades\Auth; // Import the Auth facade

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }   

    public function callbackGoogle()
    {
        try {
            $google_user = Socialite::driver('google')->user();

            \Log::info('Google User:', ['user' => $google_user]);

            $user = User::where('google_id', $google_user->getId())->first();

            if (!$user) {
                $new_user = User::create([
                    'name' => $google_user->getName(),
                    'email' => $google_user->getEmail(),
                    'google_id' => $google_user->getId(),
                ]);

                Auth::login($new_user);
            } else {
                Auth::login($user);
            }

            return redirect()->route('explore-page');
        } catch (\Exception $e) {
            \Log::error('Google Login Error:', ['error' => $e->getMessage()]);
            return redirect('/')->with('error', 'Login failed: ' . $e->getMessage());
        }
    }
}