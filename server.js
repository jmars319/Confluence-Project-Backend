import express from 'express'
import mongoose from 'mongoose'

//App Config
const app = express();
const port = process.env.PORT || 3000
const connectionURL = 'mongodb+srv://admin:S4aA2KjIJNPpxipW@cluster0.mxm98.mongodb.net/confluencedb?retryWrites=true&w=majority'

//Middleware

//DB Config
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useInifiedTopology: true,
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send("HELLO CLEVER PROGRAMMERS!!!"));

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));