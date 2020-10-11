
exports.up =  async function(knex){
    return knex.schema.withSchema('idea').createTable('images', table => {     
      table.string('path').notNullable();
      table.string('name').notNullable();
      table.string('key').notNullable();
    
    })
  }
  
  exports.down = async function (knex){
    return knex.schema.dropTable('images');
  }