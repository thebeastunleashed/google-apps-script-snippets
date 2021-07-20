/**
 * @param {GoogleAppsScript.Document.InlineImage} docImage
 * @returns {GoogleAppsScript.Document.InlineImage} docImage
 */
const scaleImage_ = (docImage, { width = undefined, height = undefined }) => {
  const factor = docImage.getHeight() / docImage.getWidth();
  if (width && height) docImage.setWidth(width).setHeight(height);
  else if (width) {
    docImage.setWidth(width).setHeight(width * factor);
  } else docImage.setWidth(height / factor).setHeight(height);
  return docImage;
};

/**
 *
 */
function run() {
  const image = DriveApp.getFileById('1nVNdbt9SY42c-A30X5iSK4RaMcKCk2pt');
  const paragraph = DocumentApp.getActiveDocument()
    .getBody()
    .getTables()[0]
    .getRow(0)
    .getCell(1)
    .getChild(0)
    .asParagraph(); // The paragraph in a specific cell
  const inlineImage = paragraph.insertInlineImage(0, image.getBlob());
  scaleImage_(inlineImage, { width: 200 });
}
