let express = require('express')
let { connectToDb } = require('./src/db')
let router = require('./src/routes/index.routes')

const app = express()
const PORT = process.env.PORT || 5100

app.use(express.json())

app.use('/api', router)

let db

connectToDb (async (err) => {
    if (!err) {
        app.listen(
            PORT,
            () => console.log(`Server has been started on port ${PORT}`)
        )
    } else {
        console.log(err);
    }
})
// const start = async () => {
//     try {
//         await client.connect()
//         console.log('Successful conection to data base')
//         app.listen(
//             PORT,
//             () => console.log(`Server has been started on port ${PORT}`)
//         )
//         let data = []
//         let col = client.db().collection('stock').find({model: 'Polo'}).limit(3)
//         let kek = client.db().collection('stock').aggregate([{$match: {model: "Polo"}}])
//         for await (let i of col) {
//             data.push(i)
//         }
//         console.log(data)
//         console.log(kek);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

// start()