const fizzbuzz = require("./index");

// devuelve fizz cuando divisible por 3
// devuelve buzz cuando divisible por 5
// devuelve fizzbuzz cuando divisible por 3 y 5
// devuelve fiiz si contiene un 3
// devuelve buzz si contiene un 5
// hay algún número divsible por 5 y 3 y que contenga un 5 y un 3 ??? Necesita otro test

test("should return fizz if divisible by 3 without containing a number 3", () => {
  expect(fizzbuzz(12)).toBe("Fizz");
  expect(fizzbuzz(6)).toBe("Fizz");
});

test("should return buzz if divisible by 5 without cointaining a number 5", () => {
  expect(fizzbuzz(10)).toBe("Buzz");
  expect(fizzbuzz(100)).toBe("Buzz");
});

test("should return fizz if divisible by 5 and 3 without containing number 5 or 3", () => {
  expect(fizzbuzz(60)).toBe("FizzBuzz");
});

test("should return fizz if contains number 3", () => {
  expect(fizzbuzz(13)).toBe("Fizz");
});

test("should return FizzFizz if contains number 3 and is divisible by 3", () => {
  expect(fizzbuzz(33)).toBe("FizzFizz");
});

test("should return BuzzBuzz if contains number 5 and is divisible by 5", () => {
  expect(fizzbuzz(25)).toBe("BuzzBuzz");
});

test("should return fizz if cointains 3 and divisible by 5 and 3", () => {
  expect(fizzbuzz(300)).toBe("FizzFizzBuzz");
});

test("should return fizz if cointains 5 and divisible by 5 and 3", () => {
  expect(fizzbuzz(1500)).toBe("BuzzFizzBuzz");
});

test("should return FizzBuzz if contasins 3 and 5 without being divisible by any of them", () => {
  expect(fizzbuzz(53)).toBe("FizzBuzz");
});

test("should return FizzBuzzBuzz if contasins 3 and 5 and it is divisible by 5", () => {
  expect(fizzbuzz(35)).toBe("FizzBuzzBuzz");
});

test("should return FizzBuzzBuzz if contasins 3 and 5 and it is divisible by 3", () => {
  expect(fizzbuzz(1503)).toBe("FizzBuzzFizz");
});

test("should return number if not divisible by 5 and 3 and if not cointain 5 or 3", () => {
  expect(fizzbuzz(2)).toBe(2);
  expect(fizzbuzz(11)).toBe(11);
});
