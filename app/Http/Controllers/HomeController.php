<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;





//======================================================================//


//             all data are now in the ADMIN CONTROLLER                 //


//======================================================================//


























// class HomeController extends Controller
// {
//     public function index()

//     {
//        // Get the currently authenticated user
//     $currentUserId = auth()->id();

//     // Fetch all users with 'user' usertype, excluding the current user
//     $users = User::where('usertype', 'user')
//                  ->where('id', '!=', $currentUserId) // Exclude the current user
//                  ->get();

//     return Inertia::render('admin/AdminDashboard', [
//         'users' => $users
//     ]);
//     }
// }
