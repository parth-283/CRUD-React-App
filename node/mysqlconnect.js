var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});
con.connect(function(error){
    if(error) throw error;
    con.query("select * from test1",function(err,result){
        if(err)throw err;
        console.warn("all results are here",result[0].address )
    })
})