<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopicsController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function index()
    {
        $categories = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
        $name1 = "";
        $data1 = "";
        $name2 = "";
        $data2 = "";
        // return json response
        return response()->json([
            'categories' => $categories,
            'name1' => $name1,
            'data1' => $data1,
            'name2' => $name2,
            'data2' => $data2,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
