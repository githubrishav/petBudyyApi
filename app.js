const express = require('express')
const createError = require('http-errors');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
require('dotenv').config();

const apiRoute = require('./routes/api.route');
require('./helper/init_mongodb')
app.use('/api/v1', apiRoute);

app.get('/', async(req, res, next)=>{
        res.send("Hello from the server!");
})

app.use((req, res, next)=>{
        next(createError.NotFound("This route doesn't exist!"));
})

app.use((err, req, res, next)=>{
        res.status(err.status || 500);
        res.send({
                error:{
                        status: err.status || 500,
                        message: err.message
                }
        })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
        console.log(`Server running on the port ${PORT}`);
})

