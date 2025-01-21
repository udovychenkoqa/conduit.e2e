// №2
// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// function truncateString(word, n) {
//   if (n < 0) {
//     throw new Error("Number of characters cannot be negative!");
//   }
//   if (word.length < n) {
//     throw new Error("Number of characters cannot be more then length of word");
//   }
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     if (i <= n) {
//       result += word[i];
//     }
//   }
//   return result;
// }

// function truncateString1(word, n) {
//   if (n < 0) throw new Error("Number of characters cannot be negative!");
//   if (word.length < n) throw new Error("Number of characters cannot be more then length of word");
  
//   return word.slice(0, n);
// }

// console.log(truncateString("Robin Singh", 2));


// №3

// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// *звертайте увагу на те що треба проверіфукати що вам як аргумент дійсно передали імейл
// function protect_email(email){
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (emailRegex.test(email)) {
//       const arr = email.split("@");
//       const firstPart = arr[0];
//       const domain = arr[1];
//       let result = "";
//       for (let i = 0; i < Math.floor(firstPart.length / 2); i++) {
//           result += firstPart[i];
//       }
//       return result + "...@" + domain;
//   } else {
//      throw Error("Invalid email address");
//   }
// }
// console.log(protect_email("test.com"))



// №4. Parameterize String

// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// function stringParameterize(word) {
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     result += word[i].toLowerCase().trim();
//     if (word[i] === " ") {
//       result += "-";
//     }
//   }
//   return result;
// }

// function stringParameterize1(word) {
//   const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === " ") {
//       result += "-";
//     } else if (word[i] === ".") {
//       result += "";
//     } else {
//       let lowerChar = word[i]
//       for (let k = 0; k < alphabetUpper.length; k++) {
//         if (word[i] === alphabetUpper[k]) {
//            lowerChar = alphabetLower[k];
//         }
//       }
//       result += lowerChar
//     }
//   }
//   return result;
// }
// console.log(stringParameterize1("Robin Singh from USA."));


// №5 Capitalize Each Word
// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises
// function capitalize_Words(string){
//   const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
//   let newString = ""
//   for(let i = 0; i < string.length; i++){
//       if(i === 0 || string[i - 1] === " "){
//           chart = string[i]
//           for(let k = 0; k < alphabetLower.length; k++ ){
//               if(string[i ] ===  alphabetLower[k]){
//                   chart = alphabetUpper[k]
//               }
//           }
//           newString += chart
//       }else{
//           newString += string[i]
//       }  
//   }
//   return newString
// }

// function capitalize_Words_Methods(string){
//   return string.split(" ").map(chart => chart[0].toUpperCase() + chart.slice(1)).join(" ")
// }


// console.log(capitalize_Words('js string exercises'));
// console.log(capitalize_Words_Methods('js string exercises'));

// №7 Repeat String

// Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

// function repeat(string, n = 1){
//     let result = ""
//     for(let i = 0; i < n; i++){
//         result += string
//     }
//     return result
// }

// console.log(repeat("Ha!"))


// №9  Uncamelize String

// Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

// function uncamelize(string, symbol = " ") {
//     let result = "";
//     const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for (let i = 0; i < string.length; i++) {
//       for (let k = 0; k < alphabetUpper.length; k++) {
//         if (string[i] === alphabetUpper[k]) {
//           result += symbol;
//         }
//       }
//       result += string[i];
//     }
//     return result;
//   }
//   console.log(uncamelize("helloWorld", "_"));
  
//   function uncamelizeMethod(string, symbol = " ") {
//     let result = "";
//     string.split("").forEach((element) => {
//       if (element === element.toUpperCase()) {
//         result += symbol;
//         result += element;
//       } else result += element;
//     });
//     return result;
//   }
//   console.log(uncamelizeMethod("helloWorld", "_"));
  