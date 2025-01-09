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

//function cloneArray(arr) {
//     return arr.slice();
// }

// function cloneArray(arr) {
//     return [...arr];
// }

// function cloneArrayDeep(arr) {
//     return JSON.parse(JSON.stringify(arr));
// }

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

function last(arr, n = 1) {
  return arr.slice(-n);
}

console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]

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

console.log(pairNumber("025468"));

