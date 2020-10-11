const path = require("path");


module.exports = {
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'memoria53',
    database : 'idea',
  },

  migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};
