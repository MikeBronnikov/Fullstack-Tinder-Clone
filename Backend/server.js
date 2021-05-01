import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCards.js'
import cors from 'cors'
import Cards from './dbCards.js'

//app config
const app = express()
const port = process.env.port || 8001
const db_connection_url = 'mongodb+srv://admin:UOBQqjerxiernPVE@cluster0.yrkch.mongodb.net/TinderDatabase?retryWrites=true&w=majority'
//middlewares
app.use(express.json())
app.use(cors())
//DB config
mongoose.connect(db_connection_url, {
    "useNewUrlParser": true,
    "useCreateIndex": true,
    "useUnifiedTopology": true
})
//API endPionts


app.get('/', (req, res) => res.status(200).send('Hello world! =)'))

app.post('/tinder/cards', ((req, res) => {
    const cardFromRequest = req.body;
    console.log(cardFromRequest)
    Cards.create(cardFromRequest, ((error, data) => {
        if (error) { res.status(500).send(error) }
        else { res.status(201).send(data) }
    }))
}))

app.get('/tinder/cards', ((req, res) => {
    cards.find()
        .select('name url _id')
        .then((data) => {
            const response = {
                count: data.length,
                cards: data
            }
            // if (error){res.status(500).send(error)}
            // it is fine to check length
            res.status(200).send(response)
        })
}))
//Listener
app.listen(port, () => { console.log(port) })

//UOBQqjerxiernPVE