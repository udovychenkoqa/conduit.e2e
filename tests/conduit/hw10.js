function isArray(arr) {
  if (arr.length > 0 && typeof arr != "string") {
    return true;
  } else {
    return false;
  }
}

console.log(isArray("QA DOJO")); // false
console.log(isArray([1, 2, 4, 0]));

function isArray2(arr) {
  return Array.isArray(arr);
}

console.log(isArray2("QA DOJO")); // false
console.log(isArray2([1, 2, 4, 0]));

function cloneArray(arr) {
  const cloneArr = [];
  for (const el of arr) {
    cloneArr.push(el);
  }
  return cloneArr;
}

function cloneArray(arr) {
  return arr.slice();
}

function cloneArray(arr) {
  return [...arr];
}

function cloneArrayDeep(arr) {
  return JSON.parse(JSON.stringify(arr));
}

console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]

// 3️⃣ Перші елементи масиву
// ✏️ Напиши функцію для отримання перших n елементів масиву.

function first(arr, n = 0) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(first([7, 9, 0, -2])); // 7
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]

// 4️⃣ Останні елементи масиву
// ✏️ Напиши функцію для отримання останніх n елементів масиву.
// Тестові дані:

function last(arr, n) {
  if (n === undefined) return arr[arr.length - 1];
  const newArr = [];
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (count < n) {
      newArr.unshift(arr[i]);
      count++;
    }
  }
  return newArr;
}

console.log(last([7, 9, 0, -2])); //-2
console.log(last([7, 9, 0, -2], 4)); // [9, 0, -2]

// 5️⃣ Об’єднання елементів масиву
// ✏️ Напиши програму, що об'єднує елементи масиву у строку.   (гугліть як це зробити)
// Приклад:

const myColor = ["Red", "Green", "White", "Black"];
function join(arr, separator) {
  const result = arr.join(separator);
  return result;
}
console.log(join(myColor, "+"));
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// 6️⃣ Дефіси між парними числами
// ✏️ Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
// Приклад:
// Ввід: 025468
// Вивід: 0-254-6-8

function pairNumber(number) {
  let stringNumber = "";
  const arr = number.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    stringNumber += arr[i];
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
      stringNumber += "-";
    }
  }

  return stringNumber;
}

console.log(pairNumber(25468));

// 7️⃣ Сортування масиву
// ✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
// Приклад:

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// Вивід: -4,-3,1,2,3,5,6,7,8
function sort(arr) {
  const result = [];
  while (arr.length > 0) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    result.push(min);
    arr.splice(arr.indexOf(min), 1);
  }
  return result;
}
console.log(sort(arr1));

const arr2 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
function sort2(arr) {
  const result = arr.sort((a,b )=> a - b)
  return result
}

console.log(sort2(arr2));


// 9️⃣ Сума чисел від 1 до 100
// ✏️ Напиши програму, яка знайде суму чисел від 1 до 100.

function sum100(){
  let sum = 0
  for(let i = 0; i <= 100; i++){
    sum += i
  }
  return sum
}
console.log(sum100())


