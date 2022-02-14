const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming json data
app.use(express.json());
//make files (of public folder) static resources 
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}!`);
});