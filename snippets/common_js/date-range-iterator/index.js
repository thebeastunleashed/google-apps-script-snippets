/* exported makeDatesRangeIterator */
/**
 *
 * @param {Date} start
 * @param {Date} end
 * @param {number} step ms
 */
function* makeDatesRangeIterator_(start, end, step = 1000 * 60 * 60 * 24) {
  const _start = new Date(start);
  let _iterationCount = 0;
  while (_start <= end) {
    _iterationCount++;
    yield _start;
    _start.setTime(_start.getTime() + step);
  }
  return _iterationCount;
}
