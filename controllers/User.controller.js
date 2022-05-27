const {User} = require('../models/user');

module.exports.createUser = async (req,res,next)=> {
    try{
        const {body} = req;
        const createdUser = await User.create(body);
        res.status(201).send(createdUser) ; 
    }catch(error){
        next(error)
    }
};