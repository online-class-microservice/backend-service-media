'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        const schemes = ['testing', 'production', 'development'];
        schemes.forEach( async (schema) => {
            await queryInterface.createSchema(schema, { ifNotExists: true });
        })
    },

    async down (queryInterface, Sequelize) {
        const schemes = ['testing', 'production', 'development'];
        schemes.forEach( async (schema) => {
            await queryInterface.dropSchema(schema);
        })
    }
};
