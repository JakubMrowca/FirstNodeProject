import { Singleton } from "../singleton";

function init(){
  if(Singleton.db == undefined){

  var mysql = require('mysql');
  var con = mysql.createConnection({
      host: "20157.m.tld.pl",
      user: "admin20157_126",
      password: "0VbH}r4VOB",
      database: "baza20157_126"
  });
  
  con.connect(function (err:any) {
      if (err) throw err;
      console.log("Connected!");
  });
  Singleton.db = con;
  return con;
}
else return Singleton.db;
}

export default init;