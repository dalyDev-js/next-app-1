const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

let mongoClient;
let clientPromise;
if (!clientPromise) {
  mongoClient = new MongoClient(uri);
  clientPromise = mongoClient.connect();
  console.log("Connected to Mongo");
}

export default clientPromise;
