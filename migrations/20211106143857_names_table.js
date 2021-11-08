exports.up = function (knex) {
  return knex.schema.createTable("names", (table) => {
    table.increments("contact_id");
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
    table.text("email").notNullable();
    table.text("title");
    table.text("message").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("names");
};
