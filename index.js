const express = require('express')
const app = express()
const mongoose = require('mongoose')

const port = process.env.PORT || 3000

//docker provides dns for custom containers so the service name is mapped to its ip address
//to communicate between different docker containers just use service name, docker will automatically resolve with dns
mongoose.connect('mongodb://sangharsh:sangharsh@mongodb:27017?authSource=admin').then(() => { console.log('Successfully Connect to database') }).catch((e) => console.error(e))
app.get("/", (req, res) => {
    res.json({
        message: "Success",
        name: "Sangharsh",
        age: 23, bind: true,
        port: 4001,
        what: 'nooo'
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})