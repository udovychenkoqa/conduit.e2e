// №2
// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncateString(word, n) {
  if (n < 0) {
    throw new Error("Number of characters cannot be negative!");
  }
  if (word.length < n) {
    throw new Error("Number of characters cannot be more then length of word");
  }
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (i <= n) {
      result += word[i];
    }
  }
  return result;
}

function truncateString1(word, n) {
  if (n < 0) throw new Error("Number of characters cannot be negative!");
  if (word.length < n) throw new Error("Number of characters cannot be more then length of word");
  
  return word.slice(0, n);
}

console.log(truncateString("Robin Singh", 2));


// №3

// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// *звертайте увагу на те що треба проверіфукати що вам як аргумент дійсно передали імейл
function protect_email(email){
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email)) {
      const arr = email.split("@");
      const firstPart = arr[0];
      const domain = arr[1];
      let result = "";
      for (let i = 0; i < Math.floor(firstPart.length / 2); i++) {
          result += firstPart[i];
      }
      return result + "...@" + domain;
  } else {
     throw Error("Invalid email address");
  }
}
console.log(protect_email("test.com"))



