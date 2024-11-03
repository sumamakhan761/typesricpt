let greeting: string = "hello sumama"
console.log(greeting)// now this work bcz for a variable we watn to give a type 
// greeting is string 
// and when we try to give a greeting = 6 so we can't assign it.
// also especail thing is ts when like greeting so we assing it type this is string so when to go like this -> greeting. after the dot we see the all the opretion or options which possible by the string 

// let userid : number = 3344.3  // this also but a good practice we can't use this.
let userid = 33344.3; // thsi also work in typescript
userid.toFixed()
// let isLoggin : boolean = false;
let isLoggin = false; //this is also work in ts


// let hero; // At that time hero is the any type so this is not good in ts 
let hero: string;// those situation we define it so that consistency of ts if maintain

function getHero() {
  return "thor"
}

hero = getHero();


function addTwo(num: number): number {// always give a type and right syntex
  return num + 2
  // return "hello" //this also work not give any error so we need to more strick so we give a function number so that no body pass a anything onkly pass number
}

function getUpper(str: string) {
  return str.toUpperCase();
}

addTwo(3);
getUpper("sumama")


function signUpuser(name: string, email: string, isPaid: boolean) { }
signUpuser("sumama", "sumama@link.dev", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }//if we dont give ispaid false and we don't pass a ispaid on calling this give error by ts
loginUser("sumama", "sumama@link.dev");

const getHello = (s: string): string => {
  return "" // give a function string so that only pass a string not at all 
}

// function getvalue(myval : number): boolean { if we give boolean string give error when give string boolean give error yes this also one problem what we phase later on we solve this 
//     if(myval > 5 ){
//       return true;
//     }
//     return "200 OK"
// }

//  alway try to give a function type so that they return properly what we want this is a ts


function consoleError(errMsg: string): void {
  console.log(errMsg);
}


function handleError(errMsg: string): never {// when the handle error fucntion type should be never so that they return nothing 
  throw new Error(errMsg);
}




export { }