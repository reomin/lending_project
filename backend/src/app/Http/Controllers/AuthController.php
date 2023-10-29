<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    /**
     * ユーザーtableに情報を追加する
     *
     */
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'admin' => 0,
        ]);
        $json = [
            'data' => $user
        ];
        return response()->json($json, Response::HTTP_OK);
    }

    /**
     * ユーザーがログインした時に呼び出す関数
     *
     * usersテーブルに、渡された、nameとpasswordが存在していたら,home画面に飛ばす。
     * 
     * laravelのAuth機能を使って、ログイン時にsessionをつけれるようにする
     */
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::whereEmail($request->email)->first();
            $user->tokens()->delete();
            $token = $user->createToken("login:user{$user->id}")->plainTextToken;
            //ログインが成功した場合はトークンを返す
            return response()->json(['token' => $token], Response::HTTP_OK);
        }
        return response()->json('ログイン失敗しました', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
