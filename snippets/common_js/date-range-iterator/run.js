/* global makeDatesRangeIterator_ */

/**
 * Prints 100 days
 */
function runPrint100Days() {
  const start = new Date();
  const end = new Date();
  end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 100);

  const it = makeDatesRangeIterator_(start, end);
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}

/**
 * Prints all mondays of the year
 */
function runPrintAllMondays() {
  const year = 2023;
  const start = new Date(year, 0, 1);
  const end = new Date(year, 12, 0);
  const step = 1000 * 60 * 60 * 24 * 7;

  // Set the first monday
  while (start.getDay() !== 1) start.setDate(start.getDate() + 1);

  const it = makeDatesRangeIterator_(start, end, step);
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}
