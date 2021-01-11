import * as dotenv from 'dotenv'
import { app } from './app'

dotenv.config()

app.set('port', process.env.APP_PORT || 3000)

app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
})
