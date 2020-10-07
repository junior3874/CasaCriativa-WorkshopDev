import path from 'path';
import knex from 'knex';

module.exports = {
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'memoria53',
    database : 'idea',
    insecureAuth : 'true'
  },

  migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};
