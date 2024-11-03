const score: Array<number> = []
const names: Array<String> = []

function identityOne(val: boolean | number): boolean | number {
  return val // they return boolean or number so this to confused not make sense
}

function identityTwo(val: any): any {
  return val // any means anything so what any not make sence 
}

function identityThree<Type>(val: Type): Type {
  return val // this like a any but not any bcz they type we defined so what we defined this a type
}

identityThree(true) // they give like this -> function identityThree<true>(val: true): true 

function identityFour<T>(val: T): T {
  return val
} // also use this 

interface Bootle {
  brand: string
  type: number
}


// identityFour<Bootle>({brand :"susi" , type : 1}) // that how use as a interface

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3
  return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
  //do some database operations
  const myIndex = 4
  return products[myIndex]
}

interface Database {
  connection: string
  username: string
  password: string
}
function anotherFunction<T , U extends Database>(valOne:T, valTwo:U):object {
  return{
      valOne,
      valTwo
  }
}

// anotherFunction(3, {}) give in the object all the data of database

interface Quiz{
  name: string,
  type: string
}

interface Course{
  name: string,
  author: string,
  subject: string
}

class Sellable<T>{
  public cart : T[] = []
  addTocart( products : T){
    this.cart.push(products)
  }
}



