const express = require('express')
const DelaysService = require('./bus-delays-service')

const delaysRouter = express.Router()
const jsonBodyParser = express.json()

// stopsRouter
//   .route('/times/:id/:time')
//   // .all(checkStopExists)
//   .get((req, res,next) => {
//     StopsService.getAllTimesByStop(req.app.get('db'), req.params.id, req.params.time)
//       .then(stops => {
        
//         res.json(stops.map(StopsService.serializeTime))
//       })
//       .catch(next)
//   })

delaysRouter
  .get('/', (req, res,next) => {
    DelaysService.getAllDelays(req.app.get('db'))
      .then(delays => { 
        res.json(delays.map(DelaysService.serializeDelay))
      })
      .catch(next)
  })

delaysRouter
  .post('/', jsonBodyParser, (req, res, next) => {
    const { 
      user_id, 
      stop_id, 
      stop_number, 
      route_id,
      route_short_name,
      delay_time,
    } = req.body
    const delay = { 
      user_id, 
      stop_id, 
      stop_number, 
      route_id,
      route_short_name,
      delay_time,
    }
    
    // for (const [key, value] of Object.entries(delay))
    //   if (value == null)
    //     return res.status(400).json({
    //       error: `Missing '${key}' in request body`
    //     })  

    return DelaysService.insertDelay(
      req.app.get('db'),
      delay
    )
      .then(delay => {
        res
          .status(201)
          .json(DelaysService.serializeDelay(delay))
      })
  })

module.exports = delaysRouter