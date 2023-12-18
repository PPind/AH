 // database.js
 const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "postgres",
     password: "3l3v4nd1Mees",
     database: "basedAH",
     host: "localhost", 
     port: "5432"

 });
 
 const execute = async(query1, query2, insertDataQuery) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query1); // sends queries
        await pool.query(query2); // sends queries
        await pool.query(insertDataQuery);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "date" DATE
    );`;

const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "users" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        "email" VARCHAR(200) NOT NULL UNIQUE,
        "password" VARCHAR(200) NOT NULL 
    );`;

const insertDataQuery = `WITH data (title, body, date) AS 
    (
     VALUES
     ('Heeyyy', 'MA OLEN UUS VÄIKE KASSIKENE KES ELAB SU PEAS IHIHIHIIHIH', TO_DATE('2022-03-24', 'YYYY-MM-DD')),  
     ('sÄGA', 'mulle väga meeldib SÄGA', TO_DATE('2022-03-24', 'YYYY-MM-DD')),
     ('Good hat cheap price', 'wher has hatmann gon i mizz him ', TO_DATE('2023-03-24', 'YYYY-MM-DD'))
     )
   INSERT INTO posttable(title, body, date) 
   SELECT  d.title, d.body, d.date
   FROM data d
   WHERE NOT EXISTS (SELECT * FROM posttable WHERE id = 1);
 `

// A function to execute the previous query   
execute(createTblQuery1, createTblQuery2, insertDataQuery).then(result => {
    if (result) {
        console.log('If does not exists, table "users" and  table "posttable" are created');
    }
});

module.exports = pool;