
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {full_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', short_url: 'GF8'},
        {full_url: 'https://www.youtube.com/watch?v=PivWY9wn5ps', short_url: 'LD9'},
        {full_url: 'https://www.linkedin.com/in/jayden-hall-9b274491/', short_url: 'VE4'}
      ])
    })
}
