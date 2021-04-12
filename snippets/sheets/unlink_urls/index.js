/**
 * Removes all links from the range
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} range A range
 * @return {GoogleAppsScript.Spreadsheet.RichTextValue[][]}
 */
function unlinkUrls_(range = SpreadsheetApp.getActiveRange()) {
  return range.setRichTextValues(
    range.getRichTextValues().map((rowRichTextValues) =>
      rowRichTextValues.map((richTextValue) => {
        let copy;
        if (richTextValue.getRuns().some((ruin) => ruin.getLinkUrl())) {
          copy = richTextValue.copy();
          copy.setLinkUrl(undefined);
          return copy.build();
        }
        return richTextValue;
      })
    )
  );
}
