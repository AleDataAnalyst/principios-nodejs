const dbUrl = process.env.DATABASE_URL;
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: dbUrl.split(':')[2], // Extrae host de URL
    port: dbUrl.split(':')[3], // Extrae puerto d URL
    database: dbUrl.split('/')[3], // Extrae nombre de base de datos de URL
    user: dbUrl.split(':')[1].split('@')[0], // Extrae username de URL
    password: dbUrl.split(':')[1].split('@')[1], // Extrae password de URL
  }
});
