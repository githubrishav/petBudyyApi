const mongoose = require('mongoose');

MONGO_URL = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.PASSWORD}@cluster0.gjljpog.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority&appName=${process.env.APP_NAME}`

mongoose.connect(MONGO_URL).then(()=>{
        console.log("Mongo is connected!");
}).catch((err)=>{
        console.log(err.message);
})