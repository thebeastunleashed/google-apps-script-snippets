/**
 * @file A snippet for deleting rows from a Google Sheet by condition.
 * Examples of the snippet
 * {@link https://webapps.stackexchange.com/a/133308/}
 * {@link https://groups.google.com/forum/#!topic/google-apps-script-community/-ITmOCfJmFw}
 * {@link https://toster.ru/q/690651}
 */

/**
 * Removes rows from a sheet according to the condition
 *
 * @function
 * @name deleteRowsByConditional_
 * @example
 * // Removes all rows where B column contains 10
 * deleteRowsByConditional_(SpreadsheetApp.getActiveSheet(),
 *   function(currentValue){
 *     return currentValue[1] === 10;
 *   }
 * );
 *
 * @param {Sheet} sheet - Represents the Sheet that is changing.
 * @param {conditionCallback} condition - The callback that should return true/false state for each row.
 * @param {dataCallback} action - The callback that exec with current removed rows.
 **/
function deleteRowsByConditional_(sheet, condition, action) {
  sheet
    .getDataRange()
    .getValues()
    .forEach(
      (_, i, arr) => {
        const j = arr.length - i - 1;
        if (this.condition.apply(null, [arr, j])) {
          this.isContinue++;
          if (j > 0) return;
        }
        if (this.isContinue > 0) {
          const prevPos = j + 1;
          if (action) action(arr, prevPos, this.isContinue);
          this.sheet.deleteRows(prevPos + 1, this.isContinue);
          this.isContinue = 0;
          return;
        }
        return;
      },
      { sheet: sheet, condition: condition, isContinue: 0 }
    );
}

/**
 * Returns true/false state for each row.
 *
 * @callback conditionCallback
 * @param {Array} array - The DataRange.
 * @param {number} index - The index of the current row.
 * @return {boolean}
 **/

/**
 * Exec with current removed rows.
 *
 * @callback dataCallback
 * @param {Array} array - The DataRange.
 * @param {number} index - The index of the current row.
 * @param {number} index2 - The index2 of the current row.
 * @return {any}
 **/
