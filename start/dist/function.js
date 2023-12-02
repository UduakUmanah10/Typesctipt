"use strict";
// the any key word would accept any variable type and it is unsafe for
// variable decleration and hence it is used for generics only
// any turns off the type checking for typescript
// you can use the no implicit any in the type script config file to stop the ]
// use of any
exports.__esModule = true;
function addTwo(num) {
    return num + 4.03;
}
function getUpper(val) {
    return val.toUpperCase();
}
function SignUpUser(name, emeil, isPaid) {
}
var loginuser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
function getValue(myVal) {
    if (myVal > 5) {
        return 5;
    }
    return 0;
}
var getHello = function (s) { return s; };
// for map you can indicate the type that is to be returned in the 
// lambda  as shown below.
var heroes = ["thor", "spiderman", "iron man"];
heroes.map(function (it) {
    return " ";
});
// always use void when you are not expection any 
// thing  to be retuened in an function
// a good use case is for console logging errors
function consoleError(errmsg) {
    console.log(errmsg);
}
// if a function never returns a value use never
// a use case can be when you want to throw  an error
// never is used for values that are never observed
//that terminates the  program execution or  throws an exception
function handleError(errmsg) {
    throw new Error(errmsg);
}
getUpper("name");
