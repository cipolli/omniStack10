const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://rocketseat:rocketseat@cluster0-omtey.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})


app.use(express.json());1
app.use(routes);



app.listen(3333);