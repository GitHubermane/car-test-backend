let express = require('express')
let { connectToDb } = require('./src/db')
let router = require('./src/routes/index.routes')
let cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5100

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.API_URL
}))

app.use('/api', router)

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