<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Admin Route =================================================== //

Route::prefix('admin')->group(function() {
    Route::get('/login', [AdminController::class, 'Index'])->name('admin.login');
    Route::post('/login/user', [AdminController::class, 'Login'])->name('admin.login.user');
    Route::get('/dashboard', [AdminController::class, 'Dashboard'])->name('admin.dashboard')->middleware('admin');
    Route::get('/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout')->middleware('admin');
    Route::get('/register', [AdminController::class, 'AdminRegister'])->name('admin.register');
    Route::post('/register/create', [AdminController::class, 'AdminRegisterCreate'])->name('admin.register.create');


});


// Admin Route =================================================== //

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/explore-page', function (){return Inertia::render('ExplorePage'); })->name('explore-page');
    Route::get('/overview', function (){return Inertia::render('OverviewReview'); })->name('overview');
    Route::get('/create-review', function (){return Inertia::render('WriteReview'); })->name('create-review');
    
});


Route::get('/login-select', function () {
    return inertia::render('LoginSelect');
});



require __DIR__.'/auth.php';


//Route::get('admin/dashboard', [HomeController::class, 'index'])->middleware(['auth', 'admin']);



Route::fallback(function () {
    return Inertia::render('NotFound');
});