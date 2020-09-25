const express = require('express')
const consola = require('consola')
const dotenv = require('dotenv')

const { Nuxt, Builder } = require('nuxt')

const bodyParser = require('body-parser')
const morgan = require('morgan')

// const Nuxt.js options
const config = require('../nuxt.config.js')
// const logger = require('./services/logger')

// Api router
// const router = require('./api/router')
dotenv.config()

const app = express()
// const helmet = require('helmet');

app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
app.use(bodyParser.json({ limit: '100mb' }))

// Security
// app.use(helmet());

// Logging
morgan.format(
  'default_format',
  `":method :url" :status :res[content-length] - :response-time ms`
)

// app.use(morgan('default_format', { stream: logger.stream }))

// app.use('/api', router)

config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()
