const express = require('express')
const app = express();
const sequelize = require('./util/dataBase')
const cors = require('cors')
const userRouter = require('./router/user')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use('/' , userRouter)
sequelize.sync();
app.listen(3000)