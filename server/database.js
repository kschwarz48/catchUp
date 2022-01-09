export let db;
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost/catchUp";
const client = new MongoClient(uri);

async function connect() {
  // Connect the client to the server
  await client.connect();
  // Establish and verify connection
  await client.db("admin").command({ ping: 1 });
  db = client.db();
  console.log("Connected successfully to server BOI");
}

export default {
  connect,
};
