<?php
use App\Http\Controllers\GoogleController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // sleep(1);
    return inertia('Home');
});





// Authentication Components

Route::get('/login-select', function () {
    sleep(1);
    return inertia::render('LoginSelect'); 
});

Route::get('/login', function () {
    sleep(1);
    return inertia::render('Login'); 
});

Route::get('/signup', function () {
    sleep(1);
    return inertia::render('Signup'); 
});

Route::get('/otpverification', function () {
    sleep(1);
    return inertia::render('Otpverification'); 
});


Route::get('/password-reset', function () {
    sleep(1);
    return inertia::render('LoginSelect'); 
});

Route::get('/otp-password-reset', function () {
    sleep(1);
    return inertia::render('OtpPasswordReset'); 
});






// Establishment Components ===== Establishment_Account || Establishment_QrCode || 

Route::get('/est-account', function () {
    return inertia::render('Establishment_Account'); 
});

Route::get('/est-qr', function () {
    return inertia::render('Establishment_QrCode'); 
});





// Explore, Reviews, Overview Components 

Route::get('/explore-page', function () {
    return inertia::render('ExplorePage'); 
})->name('explore-page');

Route::get('/overview', function () {
    return inertia::render('OverviewReview'); 
});


Route::get('/rate', function () {
    return inertia::render('WriteReview'); 
});

Route::fallback(function () {
    return Inertia::render('NotFound');
});

//google auth routes

Route::get('/auth/google', [GoogleController::class, 'redirectToGoogle'])->name('google.login');
Route::get('/auth/google/callback', [GoogleController::class, 'callbackGoogle'])->name('google.callback');

