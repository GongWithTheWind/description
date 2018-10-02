const pg = require("pg");

const connectionString = "postgres://localhost:5432/postgres";

const client = new pg.Client(connectionString);
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("postgres database connected");
});

const results = [];

const queryString = "select * from descriptions where homeid = 4000000";
console.time('timer')
const query = client.query(queryString);
query.on("row", (row) => {
  results.push(row);
})
query.on("end", () => {


  console.log("successful query");
  console.log(results[0].homeid);
  console.timeEnd('timer');
})