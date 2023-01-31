'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        const schemes = ['testing', 'production', 'development'];
        schemes.forEach( async (schema) => {
            await queryInterface.createTable('media', {
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
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            }, {
                schema: schema
            });
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('media');
    }
};
