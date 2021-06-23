/**
 * @file A snippet for reset the sheet/sheets data to its original state
 * Samples for {@link https://support.google.com/docs/thread/5809954?msgid=5809954}
 */

/**
 * Clear the sheet by the range list
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet The sheet
 * @param {Array.<string>} rangesAddressesList The list of ranges to return,
 *                         as specified in A1 notation or R1C1 notation.
 */
function resetByRangesList_(sheet, rangesAddressesList) {
  sheet.getRangeList(rangesAddressesList).clearContent();
}

/**
 * Reset the sheet by the range list to a value
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet The sheet
 * @param {Array.<string>} rangesAddressesList The list of ranges to return,
 *                         as specified in A1 notation or R1C1 notation.
 */
function resetByRangesListToValue_(sheet, rangesAddressesList, value) {
  value = value || '';
  sheet.getRangeList(rangesAddressesList).setValue(value);
}
