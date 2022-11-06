//DATABASE CONNECTION
require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Yousuf:Yousuf123@clustertest0.eduloyn.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true //FALTU KI WARNING SE BACHNE K LIYE
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
})