import * as swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import path from 'path'
const __dirname = path.resolve()

const swaggerDefinition = {
  swagger: '2.0',
  info: {
    title: 'Test API',
    version: '1.0',
    description: 'API '
  },
  host: `${process.env.APP_URL}/api`,
  basePath: '/'
}

const options = {

  swaggerDefinition: swaggerDefinition,
  apis: [`${__dirname}/src/swagger.yaml`]
}

const specs = swaggerJsDoc(options)

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}
