"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "hello sumama";
console.log(greeting); // now this work bcz for a variable we watn to give a type 
// greeting is string 
// and when we try to give a greeting = 6 so we can't assign it.
// also especail thing is ts when like greeting so we assing it type this is string so when to go like this -> greeting. after the dot we see the all the opretion or options which possible by the string 
// let userid : number = 3344.3  // this also but a good practice we can't use this.
var userid = 33344.3; // thsi also work in typescript
userid.toFixed();
// let isLoggin : boolean = false;
var isLoggin = false; //this is also work in ts
// let hero; // At that time hero is the any type so this is not good in ts 
var hero; // those situation we define it so that consistency of ts if maintain
function getHero() {
    return "thor";
}
hero = getHero();
function addTwo(num) {
    return num + 2;
    // return "hello" //this also work not give any error so we need to more strick so we give a function number so that no body pass a anything onkly pass number
}
function getUpper(str) {
    return str.toUpperCase();
}
addTwo(3);
getUpper("sumama");
function signUpuser(name, email, isPaid) { }
signUpuser("sumama", "sumama@link.dev", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //if we dont give ispaid false and we don't pass a ispaid on calling this give error by ts
loginUser("sumama", "sumama@link.dev");
var getHello = function (s) {
    return ""; // give a function string so that only pass a string not at all 
};
