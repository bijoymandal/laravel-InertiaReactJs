<?php

namespace App\Http\Controllers\Api;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
        ]);

        $product = Products::create($request->all());

        return response()->json([
            'message'=>'Data saved successfully',
            'data'=>$product,
            'status'=>true
        ],201);
    }

    public function show($id)
    {
        $product = Products::findOrFail($id);

        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
        ]);

        $product = Products::findOrFail($id);
        $product->update($request->all());

        return response()->json([
            'message'=>'Data update successfully',
            'data'=>$product,
            'status'=>true
        ]);
    }

    public function destroy($id)
    {
        Products::destroy($id);

        return response()->json([
            'message' => 'Data deleted successfully',
            'status'=>true
        ]);
    }
}
