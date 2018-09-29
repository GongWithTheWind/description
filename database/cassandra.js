const cassandra = require("cassandra-driver");

const client = new cassandra.Client({ contactPoints: ["127.0.0.1"], keyspace: "listings" });
client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("cassandra connected");
});

const query = "select * from houses where homeid = 10000000";
client.execute(query, (err, result) => {
  console.time('timer');
  if (err) {
  	console.log(err);
  	return;
  }
  console.log(result.rows[0])
  console.timeEnd('timer')
});

