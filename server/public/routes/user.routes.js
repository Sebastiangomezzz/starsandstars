const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");



router.post('/', (req, res)=>{
    const { username, password, email } = req.body

    User.create({
        username,
        password,
        email
    })
    .then( createdUser => res.json(createdUser))
    .catch(err=>res.json(err))
})

/*
router.get('/', (req, res)=>{
    User.find()
    .populate('tasks')
    .then( allTheUsers => res.json(allTheUsers))
    .catch(err=>res.json(err))
})
*/

router.get('/:userId', (req, res) => {
    const { userId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    User.findById(userId)
      .then(project => res.json(project))
      .catch(err => res.json(err));
});



router.delete('/:userId', (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    User.findByIdAndRemove(userId)
      .then(() => res.json({ message: `Project with ${userId} is removed successfully.` }))
      .catch(error => res.json(error));
});
   

module.exports = router