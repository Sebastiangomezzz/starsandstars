const router = require("express").Router();
const mongoose = require("mongoose");
const Suggestion = require("../models/Suggestion.model");
const isLoggedIn = require('../middleware/isLoggedIn')


router.post('/', (req, res)=>{
    const { name, comment, user } = req.body
    
    Suggestion.create({
        name,
        comment,
        user
    })
    .then(suggestion=>suggestion.populate('user').execPopulate())//usar esto solo en el create
    .then( createdSuggestion => res.json(createdSuggestion))
    .catch(err=>res.json(err))
})

module.exports=router