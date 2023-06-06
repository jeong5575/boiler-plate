const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const {User} = require('./models/User'); 
const config = require('./config/key' );
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose') 
mongoose.connect (config.mongoURI)
    .then(()=>console.log('mongodb connceted'))
    .catch(err=>console.log(err))

app.use(cookieParser());
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
  
  app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res.json({
            loginSuccess: false,
            message: "제공된 이메일에 해당하는 유저가 없습니다.",
          });
        }
  
        return user.comparePassword(req.body.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res.json({
                loginSuccess: false,
                message: "비밀번호가 틀렸습니다.",
              });
            }
  
            return user.generateToken()
              .then((user) => {
                res.cookie("x_auth", user.token)
                  .status(200)
                  .json({
                    loginSuccess: true,
                    userId: user._id,
                  });
              });
          });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          loginSuccess: false,
          message: "로그인 중 오류가 발생했습니다.",
        });
      });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})