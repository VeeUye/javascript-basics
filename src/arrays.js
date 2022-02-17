const getNthElement = (index, array) => {
  // if (index === array.length
  // return array.at(index);

  // if (index > array.length - 1) {
  //   index -= array.length;
  // }
  // return array[index];

  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return Array.from(string.replace(/,/g, ''));
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings2 => strings2.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings
    .toString()
    .split('')
    .reverse()
    .join('')
    .split(',')
    .reverse();
};

const onlyEven = numbers => {
  return numbers.filter(function(num) {
    return num % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
