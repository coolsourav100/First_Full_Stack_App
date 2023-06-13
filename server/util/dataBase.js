const Sequelize = require('sequelize');
const sequelize = new Sequelize('userData' ,'root' , 'sourav1234#',{
    host: 'localhost' ,
    dialect : 'mysql'

})
 module.exports = sequelize