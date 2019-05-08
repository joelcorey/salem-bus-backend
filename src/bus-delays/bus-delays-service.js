const xss = require('xss')

const DelaysService = {

  getAllDelays(db) {
    return db
      .from('delays')
      .select(
        'user_id',
        'stop_id',
        'stop_number',
        'route_id',
        'route_short_name',
        'delay_time',
        'date_created',
        'date_modified',
      )
  },
  insertDelay(db, delay) {
    return db
      .insert(delay)
      .into('delays')
      .returning('*')
      .then(([delay]) => delay)
  },
  serializeDelay(delay) {
    return { 
      userId: delay.user_id,
      stopId: delay.stop_id,
      stopNumber: delay.stop_number,
      routeId: delay.route_id,
      routeShortName: delay.route_short_name,
      delayTime: delay.delay_time,
      dateCreated: delay.date_created,
      dateModified: delay.date_modified,
    }
  },

}

module.exports = DelaysService