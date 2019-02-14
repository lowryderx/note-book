// Uncomment the next line to load our .env file and add the values to process.env
// require('dotenv').config({ silent: true });
module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    // Environment-dependent settings
    development: {
        db: {
            dialect: 'sqlite',
            storage: 'db/notes.db',
            operatorsAliases: false,
        },
    },
    production: {
        db: {
            dialect: 'sqlite',
            storage: 'db/notes.db',
            operatorsAliases: false,
        },
    },
};