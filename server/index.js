require('dotenv').config() 
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const app = express()

const PORT = 4000

app.use(express.json())

app.listen(PORT, () => console.log(`PORT ${PORT} IS FIRING ON ALL CYCLINDERS`))