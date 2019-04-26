// Intro to Javascript Assessments

// Consider this variable:

// var mantra = "Be the dev"
// // // console.log(mantra[0]);
// // // 1. Write the code that returns 'B' from mantra.
// //
// // if (mantra.includes("x")){
// //   console.log("mantra includes x");
// // } else {console.log("mantra does not include x");}
//
// // function letterId(words)for (let i=0; i < words.length; i++) {
// //   if (words) = "x"
// // }
// // 3. Write the code that determines if there is a 'v' in mantra.
// if (mantra.includes("v")){
//   console.log("mantra includes v");
// } else {console.log("mantra does not include v");
// }
// // Stretch: Write the code that returns the position of 'v' in mantra.
// var onlyv = mantra.indexOf("v")
// console.log(onlyv)

// Consider the following statement:

// var codingIsEasy = true
// var imBored = true
//
// if (codingIsEasy && imBored) {
//     console.log("I need more!")
// } else {
//     console.log("Steady as she goes")
// }

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

// var imLost = false
// var imFrustrated = false
//
// if (imLost || imFrustrated) {
//     console.log('Break time!')
// } else {
//     console.log('Keep coding!')
// }

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
// var mantra = "Be the dev"

// for (let i=0; i < mantra.length; i++)  {
//   console.log(mantra[i]);
// }
// // Stretch: Using a while loop.
// while (mantra.includes("v") !== true) {
//   console.log(mantra);mantra++
// }
// var i = mantra.length;
// while (i--) {
//   console.log(mantra.charAt(i))}
// Super Stretch: Using forEach().


// // Write your code below
// var mantraArray = mantra.split("")
//
// var newMantra = []
// mantraArray.forEach(function(element){
//   newMantra.push(element)
// })
// console.log(newMantra);

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function noVowels(words){
  var newArr = []
  var letters = words.split("")
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== "a" && letters[i] !== "e" && letters[i] !== "i" && letters[i] !== "o" && letters[i] !== "u") {
      newArr.push(letters[i])
    }var sentence = newArr.join("")

    }return sentence
  }
//
  console.log(noVowels(message))

// var message1 = "joel"
// // // // Stretch: Update your function to throw an exception if the argument is not a string.
// function noVowels(words){
//
//   var newArr = []
//   var letters = words.split("")
//
//   if (typeOf (words) !== "string"){
//     return "Error need a string"
//   } else {
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] !== "a" && letters[i] !== "e" && letters[i] !== "i" && letters[i] !== "o" && letters[i] !== "u") {
//       newArr.push(letters[i])
//     }var sentence = newArr.join("")
// } return sentence
// }
// }
// // } else{
// //   return (words)
// // }
// // }
// console.log(noVowels(message1));
// if (typeOf (sentence) === "string"){
//   return sentence}
//   else if (typeOf (sentence) !== "string"){
//     return words
//   }

  //
  // console.log(noVowels(message));
// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
// var message1 = 25
// function noVowels(words){
//
//   var newArr = []
//   var letters = words.split("")
//
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] !== "a" && letters[i] !== "e" && letters[i] !== "i" && letters[i] !== "o" && letters[i] !== "u") {
//       newArr.push(letters[i])
//     }var sentence = newArr.join("")
// }{ return sentence
// } elseif (typeOf (letters[i]) !== "string"){
//   return "error"
// console.log(onlyLetters(message1))
// Consider the following variable:

// var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
// let catsOnly = toonimals.filter(function(obj){
//   return obj.animal === "cat"
// })
// console.log(catsOnly);
//
// var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
//
// cats = (arr) => {
//  let catsOnly = arr.filter(function(value){
//   return value.animal === "cat"
// })
// return catsOnly
// }
// console.log(cats(toonimals));
// // 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

// for (let catsOnly in toonimals[0]) {if (catsOnly = "cat")
// {console.log(`${toonimals[0][catsOnly]}`);
// }
// }
const message = "Javascript is awesome"
const onlyConsonants = (string, array) =>{
var vowels = ["a", "e", "i", "o", "u"]
let allLetters = string.split("")
let nowVowels = allLetters.filter(value => !array.includes(value))
return newWord = nowVowels.join("")
}
console.log(onlyConsonants(message));
