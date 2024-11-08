// steps to define express server
// Loads .env file contents into process.env
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./database/dbConnection')

const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`pfServer started at port ${PORT} and waiting for client request`);
})

// resolving get request to http://localhost:3000/
pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red">pfServer started at port and waiting for client request!!</h1>`)
})

