import Knex from 'knex';

export async function up(Knex: Knex){
  return Knex.schema.createTable('ideias', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image').notNullable();
    table.string('url').notNullable();
    table.string('description').notNullable();
    table.string('category').notNullable();
  })
}

export async function down(Knex: Knex){
  return Knex.schema.dropTable('ideias');
}