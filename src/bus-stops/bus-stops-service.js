const xss = require('xss')

const StopsService = {

  getAllStops(db) {
    return db
      .from('stops')
      .select(
        'stops.stop_id',
        'stops.stop_code',
        'stops.stop_name',
        'stops.stop_desc',
        'stops.stop_lat',
        'stops.stop_lon',
        'stops.wheelchair_boarding'
      )
  },

  getAllTimesByStop(db, id, time = 0) {
    return db
      .from(
        'stop_times'
        )
      .join('stops', 'stop_times.stop_id', '=', 'stops.stop_id')
      .join('trips', 'stop_times.trip_id', '=', 'trips.trip_id')
      .join('routes', 'trips.route_id', '=', 'routes.route_id')
      .select(
        'stop_times.stop_id',
        'stop_times.arrival_time',
        'stop_times.departure_time',
        'stops.stop_code',
        'stops.stop_name',
        'stops.stop_desc',
        'stops.stop_lat',
        'stops.stop_lon',
        'trips.route_id',
        'routes.route_short_name',
        'routes.route_long_name',
      )
      .where('stops.stop_id', '=', id)
      .where('stop_times.arrival_time', '>=', time)
  },

  getById(db, id) {
    return StopsService.getAllStops(db)
      .where('stops.stop_id', id)
      .first()
  },

  getByExactLatLong(db, lat, lon) {
    return StopsService.getAllStops(db)
      .where('stops.stop_lat', lat)
      .andWhere('stops.stop_lon', lon)
  },

  // getByNearLatLong(db, lat, long) {
  //   return StopsService.getAllStops(db)
  //     .where()
  // }

  // getAllStopOnRoute(db, route) {
  //   return 
  // },

  serializeStop(stop) {
    return {
      stopId: stop.stop_id,
      code: stop.stop_code,
      name: stop.stop_name,
      desc: stop.stop_desc,
      lat: stop.stop_lat,
      long: stop.stop_lon,
      wheelchair: stop.wheelchair_boarding,
      tripHeadsign: stop.trip_headsign,
    }
  },

  serializeTime(stop) {
    return {
      stopId: stop.stop_id,
      stopCode: stop.stop_code,
      stopName: stop.stop_name,
      stopDesc: stop.stop_desc,
      stopLat: stop.stop_lat,
      stopLon: stop.stop_lon,
      arrival: stop.arrival_time,
      departure: stop.departure_time,
      tripRouteId: stop.route_id,
      routeShortName: stop.route_short_name,
      routeLongName: stop.route_long_name
    }
  }
  
}

module.exports = StopsService

