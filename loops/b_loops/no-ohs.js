// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.
function noOhs(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].replace("o", "")) {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

or; //
function noOhs(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== "0") {
      console.log(newStr);
    }
  }
}

noOhs("code");
// prints
//  c
//  d
//  e

noOhs("school");
// prints
//  s
//  c
//  h
//  l
