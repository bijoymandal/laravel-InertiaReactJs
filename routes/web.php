<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia::render('Home');
});

Route::get('products',function(){
    return inertia::render('Products');
});
