
exports.up = function(knex) {
  return knex.schema.createTable('urls', table => {
      table.string('full_url')
      table.string('short_url')
      table.string('creator')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('urls')
}
