 // database.js
 const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "postgres",
     password: "M42rru",
     database: "basedAH",// ma ei tea kuidas andmebaasid töötavad btw
     host: "localhost", 
     port: "5432"

 });
 
 const execute = async(createTblQuery1, createTblQuery2, addPostsQuery) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(createTblQuery1); // sends queries
        await pool.query(createTblQuery2);
        await pool.query(addPostsQuery);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "dislikes" INT NOT NULL,
        "isPinned" BOOLEAN NOT NULL,
        "date" DATE NOT NULL
    );`;

const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "users" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        "email" VARCHAR(200) NOT NULL UNIQUE,
        "password" VARCHAR(200) NOT NULL 
    );`;

const addPostsQuery = `
    INSERT INTO posttable (title, body, dislikes, isPinned, date)
    VALUES
    ('cheeze', 'rat eat cheese i think', 5, false, '2006-10-23'),
    ('hiii', '"MA OLEN VÄIKE SILLY KASS KES ELAB SU PEA SEES IHHIHIHIHIH', 160549, true, '2023-10-01'),
    ('D:', 'its called the D: drive because you look at how much space is left on it and you go "D:"', 7, false, '2023-04-19');
    `

// A function to execute the previous query   
execute(createTblQuery1, createTblQuery2, addPostsQuery).then(result => {
    if (result) {
        console.log('If does not exists, table "posttable" and "users" are created');
    }
});



module.exports = pool;