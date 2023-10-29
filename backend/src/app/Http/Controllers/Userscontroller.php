<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;


class UsersController extends Controller
{
    //ユーザー追加に入力されたユーザーが格納される
    public function index()
    {
        var_dump("成功しました");
    }


    // public function login(Request $request)
    // {
    //     //バリデーションを設置
    //     $user_info = $request->validate([
    //         'name' => ['required'],
    //         'password' => ['required'],
    //     ]);

    //     Log::info("👹");
    //     Log::info($user_info);
    //     die;

    //     // ログインに成功したとき
    //     if (Auth::attempt($user_info)) {
    //         Log::info("成功しました");
    //         $request->session()->regenerate();
    //         return redirect()->route('dashboard');
    //     }

    //     Log::info("👹");
    //     Log::info($request);
    // }
}
