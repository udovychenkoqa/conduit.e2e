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
  
// function uncamelizeMethod(string, symbol = " ") {
//     return string
//       .split("")
//       .map(char => char >= "A" && char <= "Z" ? symbol + char : char)
//       .join("");
// }

// function uncamelizeMethod(string, symbol = " ") {
//     return string
//       .split("")
//       .map(char => char === char.toUpperCase() ? symbol + char : char)
//       .join("");
//   }
//   console.log(uncamelizeMethod("helloWorld", "_"));
  

// Write function stringAsteriscTask(str), where str will be a string of alphanumeric characters with a single asterisk character splitting the string evenly into two separate strings.

// The string will always split evenly with the asterisk in the center. Your goal is to return a new string by pairing up the characters in the corresponding locations in both sub-strings. 

// For example: if str is
// "abc1*kyoo" then your program should return the string akbyco1o because a pairs with k, b pairs with y, etc.

// Input: "aaa*bbb"
// Output: ababab

// function stringAsteriscTask(str){
//     const firstPart = str.split("*")[0]
//     const secondPart = str.split("*")[1]
//     let result = ""
//     for(let i = 0; i < firstPart.length; i++){
//         result += firstPart[i] + secondPart[i]
//     }
//     return result
// }
// function stringAsteriscTask(str){
//     const firstPart = str.split("*")[0].split("")
//     const secondPart = str.split("*")[1].split("")
//     return firstPart.map((el, index) => el + secondPart[index]).join("")
// }

// console.log(stringAsteriscTask("abc1*kyoo"))

/**
 * "2[ab]" -> "abab"
"3[c]ker" -> "cccker"
"abcdef" -> "abcdef"
 */
// function stringTask(str){
//     const count1 = Number(str.split("")[0])
//     const count2 = Number(str.split("")[1])
//     const result = str
//     if(!isNaN(count1) && isNaN(count2)){
//         const index = str.indexOf("]")
//         const part = str.slice(1, index).split("").filter(el => el >= "a" && el <= "z").join("")
//         const secondPart = str.slice(index + 1)
//         let newResult = ""
//         for(i = 0; i < count1; i++ ){
//             newResult += part
//         }
//         return newResult + secondPart
        
//     }else if(!isNaN(count1) && !isNaN(count2)){
//         const counter = Number((count1.toString() + count2.toString()))
//         console.log(counter)
//         const index = str.indexOf("]")
//         const part = str.slice(1, index).split("").filter(el => el >= "a" && el <= "z").join("")
//         console.log(part)
//         const secondPart = str.slice(index + 1)
//         console.log(secondPart)
//         let newResult = ""
//         for(i = 0; i < counter; i++ ){
//             newResult += part
//         }
//         return newResult + secondPart
//     }else{
//         return result
//     }
// }

// console.log(stringTask("13[cx]ker"))

// Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

// function humanize_format(number){
//     if(number.toString().split("").slice(-1).join("").includes("1") 
//         && number.toString().split("").slice(-2).join("") !== "11"){
//         return number.toString() + "st"
//     }else if (number.toString().split("").slice(-1).join("").includes("2")
//         && number.toString().split("").slice(-2).join("") !== "12"){
//         return number.toString() + "nd"
//     }
//     else{
//         return number.toString() + "th"
//     }
// }