/**
 * Check/uncheck the entire checklist in the Document
 *
 * @param {GoogleAppsScript.Document.Document} doc A Document
 * @param {string} index The checklist id
 */
function uncheckListById_(doc, id) {
  const body = doc.getBody();
  const lists = body.getListItems().filter((l) => l.getListId() === id);
  const last = lists.splice(-1)[0];
  lists.reverse().forEach((item) => {
    const copy = last.copy();
    copy.asListItem().setText(item.asListItem().getText());
    body.insertListItem(body.getChildIndex(item), copy);
    item.removeFromParent();
  });
}
