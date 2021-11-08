const db = require("../data/db-config");

module.exports = {
  get,
  add,
};

function get() {
  return db("names");
}

function add(contact) {
  const [id] = await db("names").insert(contact);
  const newContact = {
    contact_id: id,
    first_name: contact.first_name,
    last_name: contact.last_name,
    email: contact.email,
    title: contact.title,
    message: contact.message,
  };
  return newContact;
}
