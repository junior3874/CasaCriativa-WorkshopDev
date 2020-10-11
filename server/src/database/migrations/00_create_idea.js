
exports.up =  async function(knex){
  return knex.schema.createTable('ideias', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('url').notNullable();
    table.string('description').notNullable();
    table.string('category').notNullable();
  })
}

exports.down = async function (knex){
  return knex.schema.dropTable('ideias');
}