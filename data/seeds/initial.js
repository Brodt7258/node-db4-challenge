
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'grilled cheese'},
        {id: 2, name: 'cereal'},
        {id: 3, name: 'yogurt'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, details: 'put cheese on bread', recipe_id: 1, step_number: 1},
        {id: 2, details: 'grill', recipe_id: 1, step_number: 2},
        {id: 3, details: 'open the cup', recipe_id: 3, step_number: 1},
        {id: 4, details: 'pour cereal into bowl', recipe_id: 2, step_number: 1},
        {id: 5, details: 'pour milk into bowl', recipe_id: 2, step_number: 2}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cheese'},
        {id: 2, name: 'bread'},
        {id: 3, name: 'cereal'},
        {id: 4, name: 'milk'},
        {id: 5, name: 'yogurt cup'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1},
        {recipe_id: 1, ingredient_id: 2},
        {recipe_id: 2, ingredient_id: 3},
        {recipe_id: 2, ingredient_id: 4},
        {recipe_id: 3, ingredient_id: 5}
      ]);
    });
};
