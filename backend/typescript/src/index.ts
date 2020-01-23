import * as express from 'express'

const app = express()

app.use((req, res) => res.send('naaa')).listen(3000)
