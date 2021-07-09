/* global uncheckListById_ */

/**
 * Run the snippet
 */
function run() {
  uncheckListById_(DocumentApp.getActiveDocument(), 'kix.yy1s6bgaip7h');
}

/**
 * Prints ids of lists in the current Document
 */
function printListIds() {
  console.log(getListIds_(DocumentApp.getActiveDocument()));
}

/**
 * Gets ids of lists in the current Document
 *
 * @param {globalThis.DocumentApp.Document} doc
 */
function getListIds_(doc) {
  return doc
    .getBody()
    .getListItems()
    .reduce((a, c) => {
      const id = c.getListId();
      if (a.indexOf(id) === -1) a.push(id);
      return a;
    }, []);
}
