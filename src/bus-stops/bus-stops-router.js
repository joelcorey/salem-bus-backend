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
  .route('/:stop_id')
  .all(checkStopExists)
  .get((req, res, next) => {
    console.log(req)
    res.json(StopsService.serializeStop(res.stop))
  })

async function checkStopExists(req, res, next) {
  console.log('hi')
  try {
    const stop = await StopsService.getById(
      req.app.get('db'),
      req.params.stop_id
    )
    console.log(req.params)
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