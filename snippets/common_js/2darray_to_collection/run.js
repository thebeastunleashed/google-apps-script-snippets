/* global arrayToCollection_ arrtocoll_ */

const ARRAY = [
  ['Num', 'Date', 'Name', 'Amount'],
  [1, new Date(), 'Alex', 100],
  [2, new Date(), 'Nate', 200],
  [3, new Date(), 'Piter', 300],
];

/**
 * Runs the snippet
 */
function run() {
  // Don't forget a deep copy
  const array = ARRAY.map((r) => [...r]);
  // Headings become keys
  array[0].forEach((_, i) => (array[0][i] = array[0][i].toLocaleLowerCase()));
  const collection = arrayToCollection_(array);
  console.log(collection);
}

/**
 * Runs the minimized function of the snippet
 */
function runMiniFn() {
  // Don't forget a deep copy
  const array = ARRAY.map((r) => [...r]);
  // Headings become keys
  array[0].forEach((_, i) => (array[0][i] = array[0][i].toLocaleLowerCase()));
  const collection = arrtocoll_(array);
  console.log(collection);
}
