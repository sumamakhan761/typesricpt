const User = {
  name: "hitesh",
  email: "hitesh@lco.dev",
  isAvtive: true
}


function createUser({ name: string, isPaid: boolean }) { }

// createUser({name: "hitesh", isPaid: false, email: "h@h.com"})// this give error bcz of email is extra one which we define so that there is another approach so that we give some extra information gives

let newUser = { name: "hitesh", isPaid: false, email: "h@h.com" }

createUser(newUser)// now there we give a some extra amount of information ans this is not give any type error 



function createCourse(): { name: string, price: number } {
  return { name: "reactjs", price: 399 }
}


// Type Aliases
// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is

// mean  for a same user we write a lots of pararmeter should be in user so we use this 
type User = {
  name: string;
  email: string;
  isActive: boolean
}


function createUser2(user: User): User {
  return { name: "", email: "", isActive: true } // return a function which in the User
}

createUser2({ name: "", email: "", isActive: true })

type User2 = {
  readonly _id: string;// only ready not update
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}


let myUser: User2 = {
  _id: "1245",
  name: "sumama",
  email: "sumama@node.dev",
  isActive: false
}

myUser.name = "sumamakhan" // so i can changed it 
// myUser._id = "2342" // use can'y change bcz this is readonly not the update and change and all



export { }