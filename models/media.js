'use strict';
module.exports = (sequelize, DataTypes) => {
    const media = sequelize.define('media', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        tableName: 'media',
        schema: process.env.NODE_ENV
    })
    return media;
};
