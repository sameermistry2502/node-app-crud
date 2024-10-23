const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://10.2.100.17:27017/staging_erp';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Function to connect to the MongoDB server
async function connect() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB');

    // Return the database instance
    return client.db(dbName);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

// Export the connect function so it can be used elsewhere
module.exports = connect;
