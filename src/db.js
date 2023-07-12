require('dotenv').config()

const { MongoClient } = require('mongodb')

let dbConnetcion

module.exports = {
    connectToDb: async (cb) => {
        try {
            const client = await MongoClient.connect(process.env.DB_CONN)
            console.log("Connected to MongoDB")
            dbConnetcion = client.db()
            return cb()
        } catch (error) {
            return cb(error)
        }
    },
    getDb: () => dbConnetcion
}