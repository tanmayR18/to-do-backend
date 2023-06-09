const mongoose = require('mongoose')

require('dotenv').config()

const dbConnect = () =>{

    mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("Connection established with the database")
    })
    .catch((err)=>{
        console.log('Error occured while connecting the database')
        console.error(err.message)
        process.exit(1)
    })

}

module.exports = dbConnect;