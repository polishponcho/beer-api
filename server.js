const express = require('express')
const app = express()
const beerRouter = require('./routes/beerRouter')

app.use('/beers', beerRouter)

app.get('/dogs', (req, res) => {
    res.send(`Hit the Kwan!`)
})

app.delete('/dogs', (req, res) => {
    res.send(`Deleted a dog!`)
})

// Catch all/base route
app.use('/', (req, res) => {
    res.send('Hello, its me...')
})

const port = process.env.PORT || 9999
app.listen(port, () => {
    console.log('Listening on port 9999...')
})