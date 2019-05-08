const express = require('express')
const DelaysService = require('./bus-delays-service')

const delaysRouter = express.Router()
const jsonBodyParser = express.json()

delaysRouter
  .post('/delays', jsonBodyParser, (req, res, next) => {

    const { 
      user_id, 
      stop_id, 
      stop_number, 
      route_id,
      route_short_name,
      delay,
    } = req.body

    const delay = { 
      user_id, 
      stop_id, 
      stop_number, 
      route_id,
      route_short_name,
      delay,
    }

    for (const [key, value] of Object.entries(delay))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })

    console.log(delay)

    AuthService.getUserWithUserName(
      req.app.get('db'),
      loginUser.user_name
    )
      .then(dbUser => {
        if (!dbUser)
          return res.status(400).json({
            error: 'Incorrect user_name or password',
          })
        console.log(dbUser)
        
      })
      .catch(next)
  })

module.exports = delaysRouter