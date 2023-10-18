require('dotenv').config();

const cors = require('cors');
const express = require('express');
const router = require('./src/routes');

const app = express();

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(3333, console.log('Server is running at port 3333'));