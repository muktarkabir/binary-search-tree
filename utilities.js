export function randomNumbers(numbers = 24, maximumValue = 100) {
  let arr = [];
  for (let i = 0; i < numbers; i++) {
    const randomNumber = Math.random() * maximumValue;
    arr.push(Math.floor(randomNumber));
  }
  return arr;
}