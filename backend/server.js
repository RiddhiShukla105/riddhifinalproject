const express = require('express');
 const mongoose = require('mongoose');

 cors = require('cors'),
 bodyParser = require('body-parser');
 dbConfig = require('./database/database');


  // MongoDB Setup
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useUnifiedTopology: true, useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected')
},
  error => {
    console.log('Database could not be connected: ' + error)
  }
)


// Setup Express.js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use( express.static(__dirname ));

// setup url pages
const user=require('./routes/articleRoutes');
const sign_user=require('./routes/userRoutes')
// const login_user=require('./routes/loginRoutes')


app.use('/', user);
app.use('/',sign_user);
// app.use('/',login_user)


const port = process.env.PORT || 4004;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

/ Error
app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
