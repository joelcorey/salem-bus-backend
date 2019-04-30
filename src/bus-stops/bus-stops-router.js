const express = require('express')
const StopsService = require('./bus-stops-service')
const { requireAuth } = require('../middleware/jwt-auth')

const stopsRouter = express.Router()

stopsRouter
  .route('/')
  .get((req, res,next) => {
    StopsService.getAllStops(req.app.get('db'))
      .then(stops => {
        res.json(stops.map(StopsService.serializeStop))
      })
      .catch(next)
  })

stopsRouter
  .route('/id/:id/times')
  // .all(checkStopExists)
  .get((req, res,next) => {
    StopsService.getAllTimesByStop(req.app.get('db'))
      // .then(stops => {
      //   stops.filter(id => stop_id == id)
      //   console.log(stops)
      //   return stops
      // })
      .then(stops => {
        res.json(stops.map(StopsService.serializeTime))
      })
      .catch(next)
  })

stopsRouter
  .route('/id/:stop_id')
  .all(checkStopExists)
  .get((req, res, next) => {
    res.json(StopsService.serializeStop(res.stop))
  })

stopsRouter
  //pass in lat long and get closest stop, simply stubbed out for now
  .route('/coords/:lat,:long')
  .get((req, res, next) => {
    let lat = parseInt(req.params.lat)
    let long = parseInt(req.params.long)
    let latlong = { "lat": lat, "long": long }
    res.send(latlong)
  })


async function checkStopExists(req, res, next) {
  try {
    const stop = await StopsService.getById(
      req.app.get('db'),
      req.params.stop_id
    )

    if (!stop) {
      return res.status(404).json({
        error: `Stop doesn't exist`
      })
    }

    res.stop = stop
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = stopsRouter