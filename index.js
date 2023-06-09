const bodyParser = require('body-parser');
const express =  require('express');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3001

app.use(bodyParser.json())

const todoRoutes = require('./routes/todo')

app.use('/api/v1',todoRoutes)


app.listen(PORT, ()=>{
	console.log(`Your website is hosted on local host ${PORT}`)
})

const dbConnect = require('./config/database')
dbConnect();

app.get('/',(req,res)=>{
	res.send("<h1>Yee buddy light weight yee baby</h1>")
})