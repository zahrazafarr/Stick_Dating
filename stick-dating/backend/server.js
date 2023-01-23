const express = require('express');
const mongoose = require ('mongoose');
const { MongoClient } = require('mongodb')
const cors = require('cors');

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

app.get('/dms' , async (req, res) => {
    
    const dm = new MongoClient(MONGODB_URI)

    try {
        await dm.connect()
        const data = dm.db('date-app-data')
        const dms = data.collection('dms')

        const allDms = await dms.find().toArray()
        res.send(allDms)
    } 
    finally 
    {
        await dm.close()
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