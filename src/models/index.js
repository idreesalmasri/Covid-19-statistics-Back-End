'use strict'
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const record = require('./savedRecordModel');
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
let recordModle = record(sequelize, DataTypes);
module.exports = {
    db: sequelize,
    record: recordModle,
}