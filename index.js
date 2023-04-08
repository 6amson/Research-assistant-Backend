require('dotenv').config({ path: './key.env' });
require('dotenv').config({ path: './lol.env' });



const port = process.env.DB_HOST;
const key = process.env.MAIN_KEY;
const local = process.env.LOCAL;
console.log(port);
console.log(local)