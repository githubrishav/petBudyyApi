const express = require('express')

const router = express.Router();

const User = require('../models/User.model');
const createError = require('http-errors');

router.post('/register', async(req, res, next)=>{
        try {
                const {name, phoneNumber, email, message, location} = req.body;
                const isExist = await User.findOne({email: email});
                if(isExist)
                        throw createError.Conflict(`${email} is already present!`);

                const user = new User(req.body);
                const savedUser = await user.save();

                res.send(savedUser);
        } catch (error) {
                next(error);
        }
})

module.exports = router;