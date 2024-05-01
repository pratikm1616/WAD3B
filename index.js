const dbConnect = require('./DB');
const express = require('express');
const app = express();
app.use(express.json())

// GET API
app.get('/', async (req, res) => {
    try {
        const collection = await dbConnect(); // Connect to MongoDB
        const result = await collection.find().toArray(); // Query the collection
        res.send(result); // Send response
    } catch (error) {
        console.error('Error:', error); // Log any errors
        res.status(500).send('Internal Server Error'); // Send a generic error response
    }
});

//post API
app.post('/',async(req,res)=>{
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data Inserted Successfully")
});

//put API
app.put('/:Name',async(req,res)=>{
    let result = await dbConnect();
    result = await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data updated Successfully")
});

// delete API
app.delete('/:Name',async(req,res)=>{
    let result = await dbConnect();
    result = await result.deleteOne({name:req.params.name});
    res.send("Data deleted Successfully")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
