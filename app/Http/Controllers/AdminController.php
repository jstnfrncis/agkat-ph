<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin;
use App\Models\ArchivedEstablishment;
use App\Models\Establishment;



class AdminController extends Controller
{
   public function Index(){
      return Inertia::render('admin/AdminLogin');
     
   }

   public function Dashboard(){
      
      // Auth for admin
      $admin = Auth::guard('admin')->user(); 
       $adminId= Auth::guard('admin')->id(); // Get the current admin's ID

      $users = User::where('usertype', 'user')
         ->where('id', '!=', $adminId) // Exclude the admin
         ->get();

         $establishments = Establishment::where('usertype', 'establishment')
         ->where('id', '!=', $adminId) // Exclude the admin
         ->get();

         
         $archivedestablishments = ArchivedEstablishment::all();
       

       // Data to get the Admin and show to the admin Dashboard
       return Inertia::render('admin/AdminDashboard', [
         'users' => $users,
         'establishments' => $establishments,
         'archivedestablishments' => $archivedestablishments,

         'adminName' => $admin->name,
         'adminEmail' => $admin->email,
         
     ]);
    
    
   }

   // Login in the Admin account the already been created
   public function Login (Request $request){
      $check = $request -> all();
      if(Auth::guard('admin')->attempt([
         'email' => $check['email'],
         'password' => $check['password'] ]))
         return redirect()->route('admin.dashboard')->with('message', 'Admin Log in successfully');

         else{
            return back()->withErrors(['email' => 'Invalid Email or Password']);
         }
   }

   //Log out function for Admin

   public function AdminLogout(){
      Auth::guard('admin')->logout();
      return redirect()->route('admin.login')->with('message', 'Admin logged out successfully');
   }
   
   public function AdminRegister(){
      return Inertia::render('admin/AdminRegister');
   }

   
   // Creating Admin Account
   public function AdminRegisterCreate(Request $request){

      Admin::insert([
         'name' => $request->name,
         'email' => $request->email,
         'password' => Hash::make($request->password),
         'created_at' => Carbon::now(),

      ]);
      
      return redirect()->route('admin.login')->with('message', 'Admin created successfully');
   }
   
} 

