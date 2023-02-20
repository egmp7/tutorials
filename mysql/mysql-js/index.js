const express = require ('express');
const mysql = require ('mysql');

const app = express();

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database: 'danfit',
})

db.connect();

app.get('/',(req,res) =>{
    const sql = 'SELECT * FROM workouts';

    db.query(sql,(err,result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(5000, ()=>(console.log('Server started!')));

// run node index.js to start the server
// Look up for ORM to create queries! 