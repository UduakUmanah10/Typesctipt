"use strict";
exports.__esModule = true;
// this is the structure of a class in java script
// 
var User = {
    name: "hitesh",
    email: " hitesh@gmail.com",
    isActive: true
};
// this form if class does not take in an additional parameter in the class
// to resolve this we can declare the class in a variable 
// with the default parameters and then pass it into the function.
var input = { name: "uduak", isPaid: true, email: "uduakumanah@" };
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// we can see that when we call this with the default parameter 
// it is accepted by the function
createUser(input);
// this is the form of a function that returns a class
function returnObject() {
    return { name: "uduak", isActive: false };
}
