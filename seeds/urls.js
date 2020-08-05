
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('urls').del()
    .then(function () {
      // Inserts seed entries
      return knex('urls').insert([
        {full_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', short_url: 'GF8', creator: "BA^!J@PJ&3H5XXV1&H&WQY8ZF@AYU!"},
        {full_url: 'https://www.youtube.com/watch?v=PivWY9wn5ps', short_url: 'LD9', creator: "BA^!J@PJ&3H5XXV1&H&WQY8ZF@AYU!"},
        {full_url: 'https://www.linkedin.com/in/jayden-hall-9b274491/', short_url: 'VE4', creator: "BA^!J@PJ&3H5XXV1&H&WQY8ZF@AYU!"}
      ])
    })
}
