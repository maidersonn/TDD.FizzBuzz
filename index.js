const fizzbuzz = (number) => {
  if (
    isDivisibleBy3(number) &&
    isDivisibleBy5(number) &&
    containsNumber3(number)
  )
    return "FizzFizzBuzz";
  if (
    isDivisibleBy3(number) &&
    isDivisibleBy5(number) &&
    containsNumber5(number)
  )
    return "BuzzFizzBuzz";
  if (isDivisibleBy3(number) && isDivisibleBy5(number)) return "FizzBuzz";
  if (
    containsNumber3(number) &&
    containsNumber5(number) &&
    isDivisibleBy3(number)
  )
    return "FizzBuzzFizz";
  if (isDivisibleBy3(number) && containsNumber3(number)) return "FizzFizz";
  if (
    containsNumber3(number) &&
    containsNumber5(number) &&
    isDivisibleBy5(number)
  )
    return "FizzBuzzBuzz";
  if (isDivisibleBy5(number) && containsNumber5(number)) return "BuzzBuzz";
  if (isDivisibleBy5(number)) return "Buzz";
  if (isDivisibleBy3(number)) return "Fizz";
  if (containsNumber3(number) && containsNumber5(number)) return "FizzBuzz";
  if (containsNumber3(number)) return "Fizz";
  return number;
};
//no llega a 100, solo al 99
const printNumbers = () => {
  for (let i = 1; i < 100; i++) {
    console.log(fizzbuzz(i + 1));
  }
};
const isDivisibleBy3 = (number) => {
  return number % 3 === 0;
};

const isDivisibleBy5 = (number) => {
  return number % 5 === 0;
};

const containsNumber3 = (number) => {
  return number.toString().includes(3);
};

const containsNumber5 = (number) => {
  return number.toString().includes(5);
};

printNumbers();
module.exports = fizzbuzz;
