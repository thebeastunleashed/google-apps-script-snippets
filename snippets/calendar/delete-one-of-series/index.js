/**
 *
 * Deletes only specific events from series that match by date and search term
 * Retuns affected events
 *
 * @param {string} calendarId
 * @param {Date} start
 * @param {Date} end
 * @param {string} search
 * @returns {GoogleAppsScript.Calendar.Schema.Event[]}
 */
function deleteEventFromSeries(calendarId, start, end, search) {
  const result = [];
  const timeMin = start.toISOString();
  const timeMax = end.toISOString();
  const events = Calendar.Events.list(calendarId, {
    timeMin,
    timeMax,
    q: search,
    singleEvents: false,
    fields: 'items',
  });
  if (events.items.length) {
    events.items
      .filter((event) => event.recurrence)
      .forEach((event) => {
        const instances = Calendar.Events.instances(calendarId, event.id, {
          timeMin,
          timeMax,
        });
        if (instances.items.length)
          instances.items.forEach((instance) => {
            instance.status = 'cancelled';
            result.push(
              Calendar.Events.patch(instance, calendarId, instance.id)
            );
          });
      });
  }
  return result;
}
