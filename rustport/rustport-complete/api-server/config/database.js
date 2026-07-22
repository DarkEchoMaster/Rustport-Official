import mysql from "mysql2/promise";
let pool;
export function db(){if(!pool)pool=mysql.createPool({host:process.env.DB_HOST||"127.0.0.1",port:Number(process.env.DB_PORT||3306),user:process.env.DB_USER||"root",password:process.env.DB_PASSWORD||"",database:process.env.DB_NAME||"rustport",waitForConnections:true,connectionLimit:10});return pool;}
export async function dbAvailable(){try{await db().query("SELECT 1");return true;}catch{return false;}}
