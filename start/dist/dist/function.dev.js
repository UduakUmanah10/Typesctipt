"use strict"; // the any key word would accept any variable type and it is unsafe for
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

function SignUpUser(name, emeil, isPaid) {}

var loginuser = function loginuser(name, email, ispaid) {
  if (ispaid === void 0) {
    ispaid = false;
  }
};

getUpper("name");