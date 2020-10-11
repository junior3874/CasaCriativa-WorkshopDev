const knex = require("knex");

const db = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'database_user',
      password : 'database_password',
      database : 'database_name',
    },
    useNullAsDefault: true,
  });
  
module.exports = db;

  