const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productDB", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(">>>>>>>>>>>>>>>>>>>>>>Established a connection to the product database"))
    .catch(err => console.log("Something went wrong when connecting to the product database", err));