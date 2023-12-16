 // database.js
 const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "postgres",
     password: "paroolfr",
     database: "basedAH",// ma ei tea kuidas andmebaasid töötavad btw
     host: "localhost", 
     port: "5432"
 });
 
 module.exports = pool;