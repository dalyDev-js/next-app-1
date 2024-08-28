const { MongoClient } = require("mongodb");

let mongoClient;
let clientPromise;
if (!clientPromise) {
  mongoClient = new MongoClient("mongodb://localhost:27017");
  clientPromise = mongoClient.connect();
  console.log("Connected to Mongo");
}

export default clientPromise;
