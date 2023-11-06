"use client";

import ItemLists from "@/components/ItemList";
import AddItems from "@/components/AddItems";



type Items ={
  id: string,
  title: string,
  stock: number
}

//dummy data
const props = [
  {
    "id":1,
    "title": "靴",
    "stock": 3
  },
  {
    "id": 2,
    "title": "靴下",
    "stock": 3
  }
]


// export async function getServerSideProps() {
//   //コンテナのIPアドレス
//   const res = await fetch(`http://172.26.0.2:8000/api/items`)
//   const items = await JSON.parse(JSON.stringify(res))
//   return { props: { items } }
// }

export default function Home(props: {items: Items[] | null}) {
return (

<main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
  <h1 className="text-4xl font bold text-gray-700 mt-32">
    Itemの貸出リスト
  </h1>
  <div className="w-full max-w-xl mt-5">
    <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
    <AddItems items={[]}/>
    <ItemLists items={[]}/>
    </div>
  </div>
</main>
  )
}