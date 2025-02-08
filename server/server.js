import express from 'express'
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import cookieParser from 'cookie-parser';

dotenv.config()

connectdb();
const port = process.env.Port || 5000
app.use(cors())
app.use(cookieParser)
app.use(express.json())

//Routes 
app.use('/api/auth' , )

app.listen(port);
