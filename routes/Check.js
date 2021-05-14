const db = require('../db-pool.js');
module.exports =  function checkFunc (log, pass){
     
    db.query(` SELECT *
    FROM "fn_check_employee"('${log}', '${pass}');`, (err, result) => {
            if(err){
                console.log("Ошибка в запросе на базу данных")
            }         
            
            console.log(result.rows[0]["employee"])
                        
        }).then(res => {
            return res.rows[0]["employee"]
        })
        .catch(err => {
            console.log(err)
        })
        
}
