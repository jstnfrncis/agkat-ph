<?php

namespace App\Http\Controllers;
use App\Models\Establishment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Models\ArchivedEstablishment;

class EstablishmentController extends Controller
{
    public function EstablishmentIndex()
    {
        return Inertia::render('establishment/EstablishmentLogin');
    }


    // Dashboard ======================================================================
    public function EstablishmentDashboard()
    {
        $establishment = Auth::guard('establishment')->user(); 
        return Inertia::render('establishment/EstablishmentDashboard',[
         'establishment' => $establishment,
        'establishmentName' => $establishment->name, 
        'establishmentEmail' => $establishment->email,
        'establishmentCoverPhoto' => $establishment->cover_photo, 
        'establishmentDescription' => $establishment->description,
        'establishmentAddress' => $establishment->address,
        'sale_section_photo' => $establishment->sale_section_photo,
        ]);
    }
    // Edit ======================================================================
    public function EstablishmentEdit($id)
   {
       $establishment = Establishment::findOrFail($id);
       
       return Inertia::render('establishment/EstablishmentEdit', [
           'establishment' => $establishment,
       ]);
   }

    // Update ======================================================================
   public function EstablishmentUpdate(Request $request, $id)
   {
    $establishment = Establishment::findOrFail($id);

    // Validate incoming request
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:establishments,email,' . $id,
        'description' => 'nullable|string',
        'address' => 'nullable|string',
        'cover_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:6048',
        'password' => 'nullable|string|min:8|confirmed', // Make sure to validate password if it's provided
    ]);

    // Handle the cover photo upload
    $coverPhotoPath = $request->file('cover_photo') ? 
        $request->file('cover_photo')->store('cover_photos', 'public') : 
        $establishment->cover_photo;

    // Update the establishment details
    $establishment->update([
        'name' => $request->name,
        'email' => $request->email,
        'description' => $request->description,
        'address' => $request->address,
        'cover_photo' => $coverPhotoPath,
    ]);

    // Update the password if it is provided
    if ($request->filled('password')) {
        $establishment->password = Hash::make($request->password);
        $establishment->save();
    }

    // Refresh the establishment user in the session
    Auth::guard('establishment')->setUser($establishment);
    
    return redirect()->route('establishment.dashboard')
        ->with('message', 'Establishment updated successfully');
   }

   public function EstablishmentDelete($id)
{
    $establishment = Establishment::findOrFail($id);

    // Archive the establishment details before deleting
    ArchivedEstablishment::create([
        'name' => $establishment->name,
        'email' => $establishment->email,
        'description' => $establishment->description,
        'address' => $establishment->address,
        'cover_photo' => $establishment->cover_photo,
        'sale_section_photo' => $establishment->sale_section_photo,
    ]);

    // Delete the establishment
    $establishment->delete();

    return redirect()->route('establishment.login')->with('message', 'Establishment account deleted and archived successfully');
}

        public function restore($id)
        {
            $establishment = Establishment::findOrFail($id);
            $establishment->update(['status' => 'active']);  // Update the status or use a restore method if you're soft deleting

            return response()->json(['message' => 'Establishment restored successfully']);
        }

        
    public function EstablishmentLogin (Request $request){
        $check = $request -> all();
        if(Auth::guard('establishment')->attempt([
           'email' => $check['email'],
           'password' => $check['password'] ]))
           return redirect()->route('establishment.dashboard')->with('message', 'Log in successfully');
  
           else{
              return back()->withErrors(['email' => 'Invalid Email or Password']);
           }
     }

     public function EstablishmentLogout(){
        Auth::guard('establishment')->logout();
        return redirect()->route('establishment.login')->with('message', 'Logged out successfully');
     }

     public function AdminRegisterCreate(Request $request){

        Establishment::insert([
           'name' => $request->name,
           'email' => $request->email,
           'password' => Hash::make($request->password),
           'created_at' => Carbon::now(),
  
        ]);
        
        return redirect()->route('establishment.login')->with('message', 'Establishment created successfully');
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
      
      return redirect()->route('establishment.login')->with('message', 'Establishment created successfully');
   }

   

   public function uploadSalePhoto(Request $request)
   {
       $request->validate([
           'sale_photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:6048',
       ]);
   
       $establishment = Auth::guard('establishment')->user();
   
       if ($establishment instanceof Establishment) {
           if ($request->file('sale_photo')) {
               $photoPath = $request->file('sale_photo')->store('sale_photos', 'public');
   
               $establishment->sale_section_photo = $photoPath;
               $establishment->save();
           }
       }
   
       return response()->json(['message' => 'Sale photo uploaded successfully']);
   }



}
    
