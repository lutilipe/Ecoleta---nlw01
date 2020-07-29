require('dotenv').config()

import knex from 'knex'

const connection = knex({
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
    },
})

export default connection
