const express = require('express');
//const MongoClient = require('mongodb').MongoClient;

var cors = require('cors')
const app = express();



app.use(cors());

//const url = 'mongodb://root:rootpassword@mongo-server-v1:27017';

// Connect to MongoDB
/*
MongoClient.connect(url, (err, client) => {
  if(err){
    throw new Error('Could not connect to the database');
  }
  console.log('Successfully connected to the database');
})
*/

// Some other stuffs 
app.get('/', (req, res) => {
  res.send('Welcome ----- this is node.js. Please write your apis here!!');
});

app.get('/api', (req, res) => {
  res.send('{"results":[{"gender":"male","name":{"title":"Mr","first":"Emin","last":"Aalvik from php"},"email":"emin.aalvik@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/87.jpg","medium":"https://randomuser.me/api/portraits/med/men/87.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/87.jpg"},"nat":"NO"}]}');
});


app.listen(5000, () => { 
  console.log('Express is listening on port 5000!')
})
