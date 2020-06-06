import path from 'path'

module.exports = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'Panda2000@3',
        database : 'nlw'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
}