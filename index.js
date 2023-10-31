const express = require('express');
const app = express();
const db = require('./config/db');

db.connection.once('open',()=>{
    console.log("db connected")
})
.on('error', (err)=>{
    console.log('err in connecting mongo db ',err)
}  )

app.listen(process.env.PORT  || 3000, ()=>{
    console.log("listen to port 3000 kesa hai ?");
})

app.use(express.json());

app.use('/', require('./routes'));

