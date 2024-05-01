const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'pratik';
const client = new MongoClient(url, { useUnifiedTopology: true });

const dbConnect = async () => {
    try {
        await client.connect(); // Connect to MongoDB
        const db = client.db(database); // Select the database
        return db.collection('ite'); // Return the collection
    } catch (error) {
        console.error('Error:', error); // Log any errors
        throw error; // Re-throw the error to be handled by the caller
    }
};

module.exports = dbConnect;
