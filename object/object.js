"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isAvtive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name: "hitesh", isPaid: false, email: "h@h.com"})// this give error bcz of email is extra one which we define so that there is another approach so that we give some extra information gives
var newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser); // now there we give a some extra amount of information ans this is not give any type error 
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser2(user) {
    return { name: "", email: "", isActive: true }; // return a function which in the User
}
createUser2({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1245",
    name: "sumama",
    email: "sumama@node.dev",
    isActive: false
};
myUser.name = "sumamakhan"; // so i can changed it 
