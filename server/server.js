import express from 'express'
const app = express();
import dotenv from 'dotenv'
import connectdb from './config/db.js'

dotenv.config()

connectdb();
const port = process.env.Port || 5000

app.listen(port);
