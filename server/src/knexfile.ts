import path from 'path';


module.exports = {
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'username',
    password : 'password',
    database : 'database_name',
  },

  migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};
