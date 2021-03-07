/**
 * Gets ID from URL
 *
 * @param {string} url The file url
 * @returns {string} The file id
 */
function getIdFromUrl(url) {
  const match = url.match(/[\w-_]{15,}/);
  return match ? match[0] : undefined;
}
