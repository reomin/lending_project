import { Items } from "@/types/items";
  
  //dummy data
  const items = [
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

  //idを渡す
  const lendItem =(e: Number)=>{
    console.log(e);
  }

function ItemLists(props: {items: Items[]}) {
    return (
      <div>
        <ul>
            {items.map((item) =>(
                <div key={item.id}>
                    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow mb-5">
                    <h1>{item.title}</h1>
                    <div className="flex">
                        <h1>{item.stock}</h1>
                        <button onClick={(e) => lendItem(item.id)} className="mx-3 bg-blue-600 text-white rounded-lg p-1">貸出</button>
                    </div>
                    </li>
                </div>
            )
            )}
        </ul>
      </div>
    );
  }
  
  export default ItemLists;