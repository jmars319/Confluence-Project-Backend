import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';

//App Config
const app = express();
const port = process.env.PORT || 27017;
const connectionURL = 'mongodb+srv://admin:S4aA2KjIJNPpxipW@cluster0.mxm98.mongodb.net/confluencedb?retryWrites=true&w=majority';

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("DB Connected Successfully");
});


//API Endpoints
app.get('/', (req, res) => res.status(200).send("HELLO!!!"));

app.post('/confluence/cards', (req, res) => {

    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

});


app.get('/confluence/cards', (req, res) => {

    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });

});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));