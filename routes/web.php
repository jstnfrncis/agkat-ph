<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});





// Authentication Components

Route::get('/login-select', function () {
    return inertia::render('LoginSelect'); 
});

Route::get('/login', function () {
    return inertia::render('Login'); 
});


Route::get('/otpverification', function () {
    return inertia::render('Otpverification'); 
});


Route::get('/password-reset', function () {
    return inertia::render('LoginSelect'); 
});

Route::get('/otp-password-reset', function () {
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
});

Route::get('/overview', function () {
    return inertia::render('OverviewReview'); 
});


Route::get('/rate', function () {
    return inertia::render('WriteReview'); 
});

Route::fallback(function () {
    return Inertia::render('NotFound');
});