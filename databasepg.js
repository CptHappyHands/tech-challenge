const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Zaq12wsX",
  database: "midwestern_challenge",
});

client.connect();

client.query(`Select * from users`, (req, res, err) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
