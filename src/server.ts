import * as express from 'express'
import config from './config'
import apiRouter from './router/api'

const app = express()

app.use('/api', apiRouter)

app.use(express.static('./public'))

app.listen(config.port, () => {
  /* tslint:disable no-console */
  console.log(
    'App is running at http://localhost:%d in %s mode',
    config.port,
    config.env
  )
  console.log('Press CTRL-C to stop\n')
  /* tslint:enable no-console */
})
