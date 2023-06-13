const Sequelize = require('sequelize')
const sequelize = require('../util/dataBase')

const User = sequelize.define('user',{
    id :{
        type : Sequelize.INTEGER ,
        primaryKey : true ,
        allowNull : false,
         autoIncrement : true,
         unique:true

    },
    name :{
        type : Sequelize.STRING ,
        allowNull : false,
        unique:true

    },
    email :{
        type : Sequelize.STRING ,
        allowNull : false,
        unique:true
    },
    age :{
        type :Sequelize.INTEGER ,
        allowNull : false,
        unique:true
    }
})
 module.exports = User