/**
 * Converts a 2D array to a collection.
 *
 * @param {Array.<Array.<any>>} array
 * @returns {Array.<object>}
 */
function arrayToCollection_(array) {
  return array.slice(1).map(
    (_, rowIndex) =>
      array[0].reduce((rowCollection, header, columnIndex) => {
        rowCollection[header] = array[rowIndex + 1][columnIndex];
        return rowCollection;
      }, {}),
    []
  );
}
