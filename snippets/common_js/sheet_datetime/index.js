/**
 * Converts date-time to numeric Sheets format
 *
 * @param {(number|Date)} date JS Date or time in ms
 * @param {number} timezoneOffset
 * @return {number} Google Sheets Date number
 */
function toGoogleSheetsDateNumber(date, timezoneOffset) {
  const _date = new Date(date);
  timezoneOffset = timezoneOffset || _date.getTimezoneOffset();
  const _start = new Date(Date.UTC(1899, 11, 30, 0, 0, 0, 0));
  return ((_date.getTime() - _start.getTime()) / 60000 - timezoneOffset) / 1440;
}
