const express = require('express');
const app = express();
require('dotenv').config();
const PORT=process.env.PORT
const router = require('./router/user_routes')
require('./DB/conmon');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
 app.use([router])
app.listen(PORT, () => console.log(`Server is running in ${PORT}`))