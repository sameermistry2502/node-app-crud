const express = require('express');
const app = express();
const port = 8001;

app.use(express.json());

const connectToDb = require('./db');

app.get('/', (req, res) => {
  res.send('Hello, Node is Running!');
});

app.post('/save-new-post', async (req, res) => {
    const data = req.body;
    const db = await connectToDb();
    const collection = db.collection('node-crud-db');
    res.json({data: collection})
    try {
      
      
      
      // Insert the new item into the "items" collection
      await collection.insertOne({ data });
      
      res.json({ message: 'user added successfully', data });
    } catch (err) {
      console.error('Error adding item:', err);
      res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
