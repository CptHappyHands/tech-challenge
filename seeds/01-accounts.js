exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("names")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("names").insert([
        {
          first_name: "Andrew",
          last_name: "Cummings",
          email: "andrewcummingscodes@gmail.com",
          title: "Mid-level Developer",
          message: "Hello, inquiring about a job",
        },
        {
          first_name: "Amalee",
          last_name: "Cummings",
          email: "andrew.amalee@gmail.com",
          title: "Dietitican",
          message: "What exactly do you do?",
        },
        {
          first_name: "Gandalf",
          last_name: "the Grey",
          email: "hobbithomie5ever@gmail.com",
          title: "Wizard",
          message: "Is it secret? Is it safe?",
        },
      ]);
    });
};
