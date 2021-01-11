import * as express from 'express'
import * as cors from 'cors'
import { router } from './routes'
import { ErrorHandler } from '@thscore/lib-api-express-js'

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.use(new ErrorHandler().error)
app.use(new ErrorHandler().notFound)

export { app }
