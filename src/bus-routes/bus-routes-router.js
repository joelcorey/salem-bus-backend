const express = require('express')
const RoutesService = require('./bus-routes-service')
const { requireAuth } = require('../middleware/jwt-auth')

const routesRouter = express.Router()

routesRouter
  .route('/')
  .get((req, res,next) => {
    RoutesService.getAllRoutes(req.app.get('db'))
      .then(stops => {
        res.json(stops.map(RoutesService.serializeRoute))
      })
      .catch(next)
  })

module.exports = routesRouter