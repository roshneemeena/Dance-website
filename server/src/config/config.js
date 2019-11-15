module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'dancetracker',
        user: process.env.DB_USER || 'dancetracker',
        password: process.env.DB_PASS || 'dancetracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './dancetracker.sqlite'

        }
    }
}
