exports.up = function(knex, Promise) {
  return knex.schema.createTable('trail', function(table){
    table.increments();
    table.text('name').notNullable();
    table.float('distance');
    table.text('location');
    table.float('elev_gain').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trail');
}
