<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Topics;

class TopicsController extends Controller
{
    public function __construct(Topics $topics) {
        $this->middleware('auth');
        $this->topics = $topics;
    }

    public function index()
    {
        
        // return json response
        return response()->json([
            'data' => Topics::all()
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $topics = new Topics();

        $topics->date = $request->input('date');
        $topics->s11 = floatval($request->input('s11'));
        $topics->s12 = floatval($request->input('s12'));
        $topics->s21 = floatval($request->input('s21'));
        $topics->s22 = floatval($request->input('s22'));

        if($topics->save()) {
            return $topics;
          }
        return false;
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
