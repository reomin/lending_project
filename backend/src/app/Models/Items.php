<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Items extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'stock',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    protected $table = 'items';


    /**
     * データベースからtitleとストックを取得する
     *
     * @var array<int, string>
     */
    static function getData()
    {
        $data = DB::table("items")
            ->select("id", "title", "stock")
            ->get();
        return $data;
    }
}
