<?php

namespace App\Http\Controllers;
use App\Models\Establishment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Database\Seeders\EstablishmentSeeder;

class EstablishmentController extends Controller
{
    public function EstablishmentIndex()
    {
        return Inertia::render('establishment/EstablishmentLogin');
    }



    public function EstablishmentDashboard()
    {
    
        $establishment = Auth::guard('establishment')->user(); 

        return Inertia::render('establishment/EstablishmentDashboard',[
            'establishmentName' => $establishment->name, 
            'establishmentEmail' => $establishment->email,
            'establishmentCoverPhoto' => $establishment->cover_photo,
            'establishmentDescription' => $establishment->description,
            'establishmentAddress' => $establishment->address,
            'sale_section_photo' => $establishment->sale_section_photo,

        ]);
        
    }

    public function EstablishmentLogin (Request $request){
        $check = $request -> all();
        if(Auth::guard('establishment')->attempt([
           'email' => $check['email'],
           'password' => $check['password'] ]))
           return redirect()->route('establishment.dashboard')->with('Error', 'Log in successfully');
  
           else{
              return back()->withErrors(['email' => 'Invalid Email or Password']);
           }
     }

     public function EstablishmentLogout(){
        Auth::guard('establishment')->logout();
        return redirect()->route('establishment.login')->with('loggedout', 'Logged out successfully');
     }

     public function AdminRegisterCreate(Request $request){

        Establishment::insert([
           'name' => $request->name,
           'email' => $request->email,
           'password' => Hash::make($request->password),
           'created_at' => Carbon::now(),
  
        ]);
        
        return redirect()->route('establishment.login')->with('success', 'Establishment created successfully');
     }

     public function EstablishmentRegister(){
      return Inertia::render('establishment/EstablishmentRegister');

     }

     public function EstablishmentRegisterCreate(Request $request){
      $coverPhotoPath = $request->file('cover_photo')->store('cover_photos', 'public');

      Establishment::insert([
         'name' => $request->name,
         'email' => $request->email,
         'password' => Hash::make($request->password), // Hash the password
         'description' => $request->description,
         'address' => $request->address,
         'cover_photo' => $coverPhotoPath, // Store the file path
      ]);
      
      return redirect()->route('establishment.login')->with('success', 'Establishment created successfully');
   }
   public function uploadSalePhoto(Request $request)
   {
       $request->validate([
           'sale_photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:10240',
       ]);
   
       $establishment = Auth::guard('establishment')->user();
   
       if ($establishment instanceof Establishment) {
           if ($request->file('sale_photo')) {
               $photoPath = $request->file('sale_photo')->store('sale_photos', 'public');
   
               $establishment->sale_section_photo = $photoPath;
               $establishment->save();
           }
       }
   
       return response()->json(['success' => 'Sale photo uploaded successfully']);
   }



}
    
