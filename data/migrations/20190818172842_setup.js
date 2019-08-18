
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', function(recipes) {
      recipes.increments();
      recipes.string('name')
        .notNullable();
    })
    .createTable('instructions', function(instructions) {
      instructions.increments();
      instructions.string('details')
        .notNullable();
      instructions.integer('step_number')
        .notNullable();
      instructions.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('ingredients', function(ingredients) {
      ingredients.increments();
      ingredients.string('name')
        .notNullable();
    })
    .createTable('recipes_ingredients', function(ri) {
      ri.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      ri.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      ri.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes_ingredients');
};
