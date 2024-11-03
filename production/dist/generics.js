"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val; // they return boolean or number so this to confused not make sense
}
function identityTwo(val) {
    return val; // any means anything so what any not make sence 
}
function identityThree(val) {
    return val; // this like a any but not any bcz they type we defined so what we defined this a type
}
identityThree(true); // they give like this -> function identityThree<true>(val: true): true 
function identityFour(val) {
    return val;
} // also use this 
// identityFour<Bootle>({brand :"susi" , type : 1}) // that how use as a interface
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addTocart(products) {
        this.cart.push(products);
    }
}
