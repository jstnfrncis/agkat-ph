<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function show($page)
    {
        // Ensure the page exists in your Pages directory before rendering
        if (view()->exists("Pages/{$page}")) {
            return Inertia::render($page);  // Inertia will load the page dynamically
        }
        
        // Optionally handle 404 for pages that don't exist
        abort(404);
    }
}
