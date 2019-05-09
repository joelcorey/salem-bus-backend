const express = require('express')
const RoutesService = require('./bus-routes-service')
const { requireAuth } = require('../middleware/jwt-auth')

const routesRouter = express.Router()

routesRouter
  .get((req, res,next) => {
    RoutesService.getAllRoutes(req.app.get('db'))
      .then(stops => {
        console.log(stops.map(RoutesService.serializeRoute))
        res.json(stops.map(RoutesService.serializeRoute))
      })
      .catch(next)
  })

module.exports = routesRouter