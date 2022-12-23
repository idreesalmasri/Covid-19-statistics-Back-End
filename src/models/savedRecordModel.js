
const record = (sequelize, DataTypes) => sequelize.define('record', {
    record_id:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
    
})

module.exports = record;