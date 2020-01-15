const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://rocketseat:rocketseat@cluster0-omtey.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

mongoose
app.use(express.json())

app.post('/users', (request, reponse) => {
    console.log(request.body)
    return reponse.json({message: "Hello Word!!!"})
}); 

app.listen(3333);