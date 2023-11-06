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

function ItemLists(props: {items: Items[]}) {
    return (
      <div>
        <ul>
            {items.map((item) =>(
                <div key={item.id}>
                    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow mb-5">
                    <h1>{item.title}</h1>
                    <h1 className="flex">{item.stock}</h1>
                    </li>
                </div>
            )
            )}
        </ul>
      </div>
    );
  }
  
  export default ItemLists;