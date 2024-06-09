const express = require("express")
const app = express()
const env = require("dotenv")
env.config()

app.get('/', (req, res) => {
    res.send('hello world')
  })
  
app.listen(process.env.PORT, () => {
    console.log(`App is listening on port: localhost:${process.env.PORT}`)
})
