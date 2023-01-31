require('dotenv').config();

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env

module.exports = {
    "development": {
        "host": DB_HOST,
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "dialect": "postgres"
    },
    "test": {
        "host": DB_HOST,
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "dialect": "postgres"
    },
    "production": {
        "host": DB_HOST,
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "dialect": "postgres"
    }
}
