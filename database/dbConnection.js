
const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("MongoDB Atlas Connected succesfully with pfServer");
    
}).catch(err=>{
    console.log("MongoDB Atlas Connection failed");
    console.log(err);
})

