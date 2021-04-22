/**
 *
 * Deletes only specific events from a series that match by date and search term
 *
 * @param {GoogleAppsScript.Calendar.Calendar} calendar
 * @param {Date} start
 * @param {Date} end
 * @param {string} search
 * @returns {GoogleAppsScript.Calendar.CalendarEvent[]}
 */
function deleteEventFromSeries(calendar, start, end, search) {
  const options = search ? {} : { search };
  const events = calendar.getEvents(start, end, options);
  return events.map(
    (event) => (event.getEventSeries() ? event.deleteEvent() : undefined, event)
  );
}
