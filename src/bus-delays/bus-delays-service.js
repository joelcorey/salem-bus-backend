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
        'date_created',
        'date_modified',
      )
  },

  serializeRoute(delay) {
    return { 
      userId: delay.user_id,
      stopId: delay.stop_id,
      stopNumber: delay.stop_number,
      routeId: delay.route_id,
      routeShortName: delay.route_short_name,
      dateCreated: delay.date_created,
      dateModified: delay.date_modified,
    }
  },

}

module.exports = RoutesService