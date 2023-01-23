const express = require('express');
const mongoose = require ('mongoose');
const { MongoClient } = require('mongodb')
const cors = require('cors');
const { v1: uuidv1 } = require('uuid');
const token = require('jsonwebtoken')

const app = express();
const db = mongoose.connection;
require('dotenv').config()

app.use(express.json());
app.use(cors())

app.use(express.static('public'));

const PORT = process.env.PORT

const MONGODB_URI = process.env.MONGODB_URI;


// ROUTES ------------------------------------------------------------------

app.get('/users' , async (req, res) => {
    
    const user = new MongoClient(MONGODB_URI)

    try {
        await user.connect()
        const data = user.db('date-app-data')
        const users = data.collection('users')

        const allUsers = await users.find().toArray()
        res.send(allUsers)
    } 
    finally 
    {
        await user.close()
    }
})


app.post('/signup', async (req, res) => {

    const user = new MongoClient(MONGODB_URI)
    console.log(req.body)
    const {email, pw} = req.body

    const userId = uuidv1()
    const hashPw = await bcrypt.hash(pw, 10)

    try {
        user.connect()
        const data = user.db('date-app-data')
        const users = data.collection('users')

        const emailInput = email.toLowerCase()

        const newData = {
            user: userId,
            email: emailInput,
            password: hashPw
        }

        const newUser = await users.insertOne(newData)

        const jwt = token.sign(newUser, emailInput, {
        expiresIn: 60 * 24,
        })

        res.status(201).json({ jwt, userId: userId, email: emailInput})
    } 
    catch (err) {
        console.log(err)
    }
})
  

//------------------------------------------------------------------

app.listen(PORT, () => console.log( 'Listening on port:', PORT));

mongoose.connect(MONGODB_URI, () => {
    console.log('connected')
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));