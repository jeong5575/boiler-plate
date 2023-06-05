const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose') 
mongoose.connect ('mongodb+srv://yuseok5575:hagung1014!@boilerplate.k53ydje.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('mongodb connceted')).catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})