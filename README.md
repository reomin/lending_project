# lending_project

貸出アプリ

Next.jsのフロントとlaravelのapiにする


テーブル

Users
Id name admin mail password

Items
Id value stock(個数)

Rending
Id UID MID(itemのid) 



要件、
ログインページ
Admin
Adminが、userとItemを追加、編集することができる。

User
ログインした時、Itemを借りることができる。
借りられるアイテムは二つまで、
同じアイテムは一つまで
それ以上は、一旦返さないといけない

ページネーション

ログインしていないユーザーはアプリを使うことはできない

貸出中





ページ構成

ログインページ、
Userマイページ　返却することができる
アイテム一覧ページ　借りることができる、

User管理ページ(admin)
Item管理ページ(admin)
