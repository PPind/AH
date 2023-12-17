 // database.js
 const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "postgres",
     password: "3l3v4nd1Mees",
     database: "basedAH",// ma ei tea kuidas andmebaasid töötavad btw
     host: "localhost", 
     port: "5432"

 });
 
 const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
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
	    "text" VARCHAR(200) NOT NULL,
        "dislikes" INT NOT NULL,
        "isPinned" BOOLEAN NOT NULL,
        "date" CHAR(10) NOT NULL
    );`;

const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

const addPostsQuery = `
    INSERT INTO posttable (title, text, dislikes, isPinned, date)
    VALUES
    ('cheeze', 'rat eat cheese i think', 5, false, '2006-10-23'),
    ('hiii', '"MA OLEN VÄIKE SILLY KASS KES ELAB SU PEA SEES IHHIHIHIHIH', 160549, true, '2023-10-01'),
    ('D:', 'its called the D: drive because you look at how much space is left on it and you go "D:"', 7, false, '2023-04-19');
    `

// A function to execute the previous query   
execute(createTblQuery1).then(result => {
    if (result) {
        console.log('If does not exists, table "posttable" is created');
    }
});

// A function to execute the previous query   
execute(createTblQuery2).then(result => {
    if (result) {
        console.log('If does not exists, create the "posttable" table');
    }
});

execute(addPostsQuery).then(result => {
    if (result) {
        console.log('Adds a few sample posts to the database');
    }
});


module.exports = pool;