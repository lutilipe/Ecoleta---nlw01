import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'
import { errors } from 'celebrate'

const port = 3333
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(errors())

app.listen(port, () => {
    console.log(`Server executando na porta ${port}`)
})