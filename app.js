const express = require("express");
const config = require("config");
const db = require('./db-pool.js');



const app = express();

app.use(express.json())


app.get('/getfaculty', async (req, res) => {
           let data = await db.query(`SELECT id_faculty, faculty
            FROM faculty`)
            res.send(data.rows)
})
app.get('/getkafedra', async (req, res) => {
    let data = await db.query(`SELECT id_kafedra, kafedra
     FROM kafedra`)
     res.send(data.rows)
})



app.use('/api/auth', require('./routes/auth.routes.js'))



const Port = config.get("port") || 5000;





const start = async () => {
    try{
        await db.connect()
        app.listen(Port, () => {
            console.log("server has been started")
        })
    }
    catch(e){
        console.log(e.message)
    }
}

start();