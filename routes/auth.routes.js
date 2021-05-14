const {Router} = require("express")
const b = require('./User')
const db = require('../db-pool.js');
const router = Router()



router.post('/register', async(req, res) => {

 
 let {idEmp ,surname= "", names= "",patron= "", date= "",faculty = 0, kafedra = 0,totalExp = 0, orgExp= 0} = req.body;
 console.log(idEmp)
 db.query(`CALL "SP_anket_ins_upd"(${idEmp},'${date}', ${faculty}, ${kafedra}, 'false',${totalExp}, ${orgExp})`, (err, result) => {
         if(err){
             console.log(err, "Ошибка в запросе на базу данных")
         }         
         
         
         res.send("exelend")
     })
    })

 



router.post('/login', (req, res) => {
    const { email, pass}  = req.body
    
    db.query(`SELECT *
    FROM "fn_role_employee"('${email}', '${pass}')`, (err, result) => {
            if(err){
                console.log(err, "Ошибка в запросе на базу данных")
            }         
            
            console.log(result.rows[0]['id_employee'])
            res.send(result.rows[0])
        })

})
module.exports = router;