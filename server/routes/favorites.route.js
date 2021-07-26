const router = require("express").Router();
const mongoose = require("mongoose");
const isLoggedIn = require('../middleware/isLoggedIn')
const User = require('/models/User.model')


router.put('/:Id', isLoggedIn, (req, res)=>{
const {Id} = req.params.id 

if (!mongoose.Types.ObjectId.isValid(Id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

User.findByIdAndUpdate(Id, {favorites},{ new : true })
.then(res=>newFavorite => res.json(newFavorite))
.catch(err=>res.json(err))

})


