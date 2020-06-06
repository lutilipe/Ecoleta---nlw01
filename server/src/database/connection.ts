import knex from 'knex'

const connection = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'Panda2000@3',
        database : 'nlw'
    },
})

export default connection