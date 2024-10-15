<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EstablishmentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\EstablishmentMiddleware;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;



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


// Establishment Route =================================================== //



Route::prefix('establishment')->group(function() {
    Route::get('/login', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentIndex'])->name('establishment.login');
    Route::post('/login/user', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentLogin'])->name('establishment.login.user');
    Route::get('/dashboard', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentDashboard'])->name('establishment.dashboard')->middleware(EstablishmentMiddleware::class);
    Route::get('logout', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentLogout'])->name('establishment.logout')->middleware(EstablishmentMiddleware::class);
    Route::get('/register', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentRegister'])->name('establishment.register');
    Route::post('/register/create', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentRegisterCreate'])->name('establishment.register.create');
    Route::get('/edit/{id}', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentEdit'])->name('establishment.edit');
    Route::post('/edit/{id}', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentUpdate'])->name('establishment.update');
    Route::delete('/establishment/{id}/delete', [App\Http\Controllers\EstablishmentController::class, 'EstablishmentDelete'])->name('establishment.delete');
    Route::post('/upload-sale-photo', [App\Http\Controllers\EstablishmentController::class, 'uploadSalePhoto'])->name('establishment.uploadSalePhoto');
    Route::post('/establishments/{id}/restore', [EstablishmentController::class, 'restore'])->name('establishments.restore');
    
    Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('/reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');


});



// Establishment Route =================================================== //



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






require __DIR__.'/auth.php';


//Route::get('admin/dashboard', [HomeController::class, 'index'])->middleware(['auth', 'admin']);



Route::fallback(function () {
    return Inertia::render('NotFound');
});