import { Sequelize } from 'sequelize';
require('dotenv').config();

const databaseConfig = {
    "username": 'anjapadu' || process.env.DB_USER,
    "password":'ferret2573' ||  process.env.DB_PASS,
    "database": 'stockmkt' ||  process.env.DB_NAME,
    "host":'usilstockmkt.cj4nuesfxys9.us-west-2.rds.amazonaws.com' || process.env.DB_HOST,
    "port": '5432' || process.env.DB_PORT,
    "dialect": "postgres"
}
console.log({ databaseConfig });

const db = databaseConfig;
const connection = new Sequelize({
    username: db.username,
    port: db.port,
    password: db.password,
    database: db.database,
    host: db.host,
    dialect: db.dialect,
    // dialectOptions: { decimalNumbers: true }

});

console.info('SETUP -- CONNECTTION TO DATABASE...');
connection
    .authenticate()
    .then(() => {
        console.info("=====DATABASE CONNECTED======")
    })
    .catch((err) => {
        console.error("======UNABLE TO CONNECT TO DATABASE=======", err)
    });

export default connection; 
