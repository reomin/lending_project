export async function getAllItems(): Promise<Items[] | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}

type Items ={
  id: string,
  title: string,
  stock: number
}

// export async function getAllItems():Promise<Items[] | null>{
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`,{
//     "method": 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
//   if(!response.ok){
//     return null;
//   }

//   return response.json();
// }