let score: number | string = 33
score = "33"
score = "abcdef"
score = 12

type User = {
  name: string,
  id: number
}

type Admin = {
  username: string,
  id: number
}

let sumama: User | Admin = { name: "sumama", id: 7 }//either we give user info or admin info

sumama = { username: "suzi", id: 123 }

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
// getDbId(3)
// getDbId("3")

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  }
}

// Arrat 
const data : number[] = [1,2,3]
const data2 :string[] = ["1" ,"2" ,"3"]
const data3 : (string | number | boolean)[] = ["1" , 2 , 3, true]

let seatAlloment : "aisle" | "middle" | "window"

seatAlloment = "aisle"

