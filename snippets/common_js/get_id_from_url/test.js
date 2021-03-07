/**
 *
 */
function runTest() {
  let passed = true;
  const maxItems = 6000;
  const items = [];

  let fileList;
  do {
    fileList = Drive.Files.list({
      maxResults: 1000,
      pageToken: fileList ? fileList.nextPageToken : '',
    });
    items.push(...fileList.items);
    console.info(items.length, fileList.nextPageToken);
  } while (fileList.nextPageToken && items.length < maxItems);

  items
    .reduce(
      (p, item) => (
        p.push(
          ...['alternateLink', 'downloadUrl', 'exportLinks'].reduce(
            (r, key) => (
              typeof item[key] === 'string'
                ? r.push({
                    url: item[key],
                    id: item.id,
                  })
                : typeof item[key] === 'object'
                ? r.push(
                    ...Object.keys(item[key]).map((elk) => ({
                      url: item[key][elk],
                      id: item.id,
                    }))
                  )
                : '',
              r
            ),
            []
          )
        ),
        p
      ),
      []
    )
    .forEach((entry, i) => {
      const test = getIdFromUrl(entry.url) === entry.id;
      if (test == undefined) {
        passed = false;
        console.warn(i, entry.url, entry.id, getIdFromUrl(entry.url));
      }
    });

  if (passed) console.log('Test is passed', items.length);
}
