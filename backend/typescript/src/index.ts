import * as express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json({ message: 'nothing' })
})

app.listen(3000)
