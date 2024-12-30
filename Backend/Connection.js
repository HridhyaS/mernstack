const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hridhyasethumadhavan:HridhyaSethumadhavan@cluster0.z0agd.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    }
    )
    .catch((err) => {
        console.log(err);
    })