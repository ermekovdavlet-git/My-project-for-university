const db = require('../db-pool.js');
module.exports = async function(emil){
     
    let a = await db.query(``, (err, result) => {
            if(err){
                console.log("Ошибка запрос на базу данных")
            }         
            
            
            return result.rows["names"]
            
        })
        
return Boolean(a)
    
}

