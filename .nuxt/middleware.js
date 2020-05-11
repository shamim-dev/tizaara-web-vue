const middleware = {}

middleware['check-before-move'] = require('..\\middleware\\check-before-move.js')
middleware['check-before-move'] = middleware['check-before-move'].default || middleware['check-before-move']

middleware['clearValidationErrors'] = require('..\\middleware\\clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
