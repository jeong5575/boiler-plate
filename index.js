const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const {User} = require('./models/User'); 
const config = require('./config/key' );

const mongoose = require('mongoose') 
mongoose.connect (config.mongoURI)
.then(()=>console.log('mongodb connceted')).catch(err=>console.log(err))


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
    const user = new User(req.body);
  
    user.save()
      .then((userInfo) => {
        return res.status(200).json({ success: true });
      })
      .catch((err) => {
        return res.json({ success: false, err });
      });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})