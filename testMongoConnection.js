const mongoose = require('mongoose');

const uri = "mongodb+srv://agathiyan:sikkiesu@taskmanager.epeu1mf.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=taskmanager";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
})
.then(() => {
    console.log('MongoDB connected to Atlas');
    mongoose.connection.close(); // Close the connection after successful test
})
.catch(err => console.error('MongoDB connection error:', err));
