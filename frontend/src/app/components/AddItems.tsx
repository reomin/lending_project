import { Items } from "@/types/items";
function AddItems(props: {items: Items[]}) {
    return (
      <form className="mb-4 space-y-3">
        <input 
        type="text"
        className="w-full border px-4 py-2 rounded-lg"
        />
        <button className="w-full mb-4 py-2 space-y-3 text-white bg-blue-600 rounded-lg">Add Item</button>
      </form>
    );
  }
  
  export default AddItems;