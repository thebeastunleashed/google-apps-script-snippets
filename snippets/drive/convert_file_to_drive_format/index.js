/**
 *
 */
function convert() {
  const blob = UrlFetchApp.fetch(
    'https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls'
  ).getBlob();

  const file = DriveApp.createFile(blob);
  Drive.Files.copy(
    {
      title: 'New file',
    },
    file.getId(),
    { convert: true }
  );
  file.setTrashed(true);
}
