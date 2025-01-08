const express = require('express')
const app = express();


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://stammer784:stammer784@e-commerce-site.y5e9d.mongodb.net/').then(()=>console.log("Mongoose Chal gya Bhai")).catch((error)=>console.log(error));
const port = process.env.Port || 5000

app.listen(port);
