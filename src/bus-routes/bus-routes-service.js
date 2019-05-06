const xss = require('xss')

const RoutesService = {

  getAllRoutes(db) {
    return db
      .from('routes')
      .select(
        'route_id',
        'route_short_name',
        'route_long_name',
      )
  },

  serializeRoute(route) {
    return { 
      routeId: route.route_id,
      routeShortName: route.route_short_name,
      routeLongName: route.route_long_name
    }
  },

}

module.exports = RoutesService