const mongoose = require('mongoose');

const uri = "mongodb+srv://agathiyan:sikkiesu@taskmanager.epeu1mf.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=taskmanager";

mongoose.connect(uri, { serverSelectionTimeoutMS: 30000})
.then(() => {
    console.log('MongoDB connected to Atlas');
    mongoose.connection.close(); 
})
.catch(err => console.error('MongoDB connection error:', err));
