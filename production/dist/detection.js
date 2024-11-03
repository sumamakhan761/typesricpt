"use strict";
function detection(val) {
    if (typeof val === "string") {
        val.toLowerCase();
    }
    // return val + 3 // gives error bcz add a 3 in a string 
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            } // array in typesript is like say object 
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    else {
        console.log("please provide a string or object");
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        //if in the account have a isadmin you se in the admin we have a isadmin okh so yah we can use this that why we use a -> in  (detection)
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
