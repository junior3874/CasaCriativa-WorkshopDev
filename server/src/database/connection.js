const knex = require("knex");

const db = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
     password : 'memoria53',
      database : 'idea',
    },
    useNullAsDefault: true,
  });
  
  module.exports = db;

  