import { MongoClient } from 'mongodb';
import fs from 'fs';

// Read and parse the JSON file
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Connection URL with properly encoded password
const url = 'mongodb+srv://rahulyadav1:Team5%40123@cluster0.zsuj9ay.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'NamasteNode';

async function main() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    // Inserting to the database
    const insertResult = await collection.insertMany(data);
    console.log('Inserted documents =>', insertResult);

    // Finding from the database
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    // // deleting from the database
    // const deleteResult = await collection.deleteMany({});
    // console.log('Deleted documents =>', deleteResult);

    return 'done.';
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());