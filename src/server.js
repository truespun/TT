import express from 'express'
import * as bodyParser from 'body-parser'
import swaggerDoc from './routes/swagger'

export default class Server {
  constructor () {
    this.server = {}
  }

  async start () {
    const app = express()

    app.use(
      bodyParser.json({
        limit: '50mb'
      })
    )

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
      next()
    })

    app.use(require('./routes'))

    swaggerDoc(app)

    app.get('/', async (req, res) => {
      res.statusCode = 200
      res.end(JSON.stringify({ app: 'up' }))
    })
    this.server = app.listen(process.env.PORT, () => {
      console.log(`Starting server on http://localhost:${process.env.PORT} `)
    })
  }

  async stop () {
    await this.server.close()
  }
}
