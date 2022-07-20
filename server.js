import express from 'express'
import mongoose from 'mongoose'

//App Config
const app = express();
const port = process.env.PORT || 3000

//Middleware

//DB Config

//API Endpoints
app.get('/', (req, res) => res.status(200).send("HELLO CLEVER PROGRAMMERS!!!"));

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));