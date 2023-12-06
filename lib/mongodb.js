import { MongoClient } from 'mongodb';

const uri=process.env.MONGODB_URI;

let client = new MongoClient(uri);
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'production') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise