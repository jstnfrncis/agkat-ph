<?php

namespace App\Http\Controllers;
use App\Models\Establishment;
use Illuminate\Http\Request;

class EstablishmentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'cover_photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'sale_section_photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Save cover photo if provided
        $coverPhotoPath = null;
        if ($request->hasFile('cover_photo')) {
            $coverPhotoPath = $request->file('cover_photo')->store('cover_photos');
        }

        // Save sale section photo if provided
        $saleSectionPhotoPath = null;
        if ($request->hasFile('sale_section_photo')) {
            $saleSectionPhotoPath = $request->file('sale_section_photo')->store('sale_photos');
        }

        // Create establishment
        Establishment::create([
            'name' => $request->name,
            'description' => $request->description,
            'address' => $request->address,
            'cover_photo' => $coverPhotoPath,
            'sale_section_photo' => $saleSectionPhotoPath,
        ]);

        return redirect()->back();
    }
}
