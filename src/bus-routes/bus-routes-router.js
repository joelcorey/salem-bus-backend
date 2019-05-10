const express = require('express')
const RoutesService = require('./bus-routes-service')
const { requireAuth } = require('../middleware/jwt-auth')

const routesRouter = express.Router()

routesRouter
  .route('/')
  .get((req, res,next) => {
    RoutesService.getAllRoutes(req.app.get('db'))
      .then(routes => {
        // console.log(stops.map(RoutesService.serializeRoute))
        console.log('hi')
        res.json(routes.map(RoutesService.serializeRoute))
      })
      .catch(next)
  })

module.exports = routesRouter