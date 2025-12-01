const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "INFINOS"

// routes
var testAPIRouter = require("./routes/testAPI");
var DeviceRouter = require("./routes/Device");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB


// Connection to MongoDB
mongoose.connect('mongodb+srv://sanjay_infinos:Sanjay999@cluster0.trn1uwi.mongodb.net/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/device", DeviceRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
