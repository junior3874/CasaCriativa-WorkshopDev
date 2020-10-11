const path = require("path");


module.exports = {
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'database_user',
    password : 'database_password',
    database : 'database_name',
  },

  migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};
