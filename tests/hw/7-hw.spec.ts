import { test, expect } from "@playwright/test";

function isPositive(number) {
  if (typeof number === "number") {
    if (number > 0) {
      console.log("number is positive");
      return true;
    } else if (number === 0) {
      console.log("number is negative");
      return false;
    } else {
      console.log("number is negative");
      return false;
    }
  } else {
    throw Error("pls use number to check if it positive");
  }
}
test('positive numbers', async () => {
  expect(isPositive(100)).toBeTruthy();
  expect(isPositive(1.2)).toBeTruthy();
  expect(isPositive(+2)).toBeTruthy();
});

test("negative numbers", async () => {
  expect(isPositive(-1321321)).toBeFalsy();
  expect(isPositive(-1.321321)).toBeFalsy();
  expect(isPositive(-1 + -1)).toBeFalsy();
});

test("zero", async () => {
  expect(isPositive(0)).toBeFalsy();
});

// Граничні значення
test("boundary values", async () => {
  expect(isPositive(1)).toBeTruthy(); 
  expect(isPositive(0)).toBeFalsy(); 
  expect(isPositive(-1)).toBeFalsy(); 
});

test("infinity values", async () => {
  expect(isPositive(Infinity)).toBeTruthy(); 
  expect(isPositive(-Infinity)).toBeFalsy();
});

// Помилки

test("non-number", async () => {
    expect(() => isPositive("2")).toThrowError("pls use number to check if it positive");
    expect(() => isPositive(null)).toThrowError("pls use number to check if it positive");
    expect(() => isPositive(undefined)).toThrowError("pls use number to check if it positive");
    expect(() => isPositive({})).toThrowError("pls use number to check if it positive");
});