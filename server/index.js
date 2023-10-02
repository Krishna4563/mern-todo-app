const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors= require('cors');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3002;

app.use(cors( {
  origin: [""],
  methods: ["POST","GET","PUT","DELETE"],
  credentials: true
} 
));

const TodoItemRoutes = require('./routes/todoroute');


mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Connected !"))
.catch(err=> console.log(err));






app.use('/',TodoItemRoutes);

app.listen(PORT,()=>console.log("Server Connected"));
