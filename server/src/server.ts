import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Ads 1'},
        {id: 2, name: 'Ads 2'},
        {id: 3, name: 'Ads 3'},
        {id: 4, name: 'Ads 4'},
    ])
})

app.listen(3000)