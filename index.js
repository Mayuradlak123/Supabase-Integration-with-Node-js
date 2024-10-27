
require("dotenv/config")

const express = require('express');
const app=express(); 
const supabase = require("./api/supabase/config")
const bodyParser = require('body-parser');
const morgan=require('morgan');

app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"))
const routes = require('./api/routes/user.routes');
app.use('/api/v1', routes);


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
   
}
)