const xss = require('xss')

const StopsService = {
  getAllStops(db) {
    return db
      .from('stops as stop')
      .select(
        'stop.stop_id',
        'stop.stop_code',
        'stop.stop_name',
        'stop.stop_desc',
        'stop.stop_lat',
        'stop.stop_lon',
        'stop.zone_id',
        'stop.stop_url',
        'stop.location_type',
        'stop.parent_station',
        'stop.stop_timezone',
        'stop.wheelchair_boarding'
      )
  },

  getById(db, id) {
    return StopsService.getAllStops(db)
      .where('stop.stop_id', id)
      .first()
  },

  getByExactLatLong(db, lat, long) {
    return StopsService.getAllStops(db)
      .where('stop.stop_lat', lat)
      .andWhere('stop.stop_long', long)
  },

  // getByNearLatLong(db, lat, long) {
  //   return StopsService.getAllStops(db)
  //     .where()
  // }

  getAllStopOnRoute(db, route) {
    return 
  },

  serializeStop(stop) {
    return {
      id: stop.stop_id,
      code: stop.stop_code,
      name: stop.stop_name,
      desc: stop.stop_desc,
      lat: stop.stop_lat,
      long: stop.stop_lon,
      zone: stop.zone_id,
      url: stop.stop_url,
      location_type: stop.location_type,
      parent_station: stop.parent_station,
      timezone: stop.stop_timezone,
      wheelchair: stop.wheelchair_boarding
    }
  }

}

module.exports = StopsService

