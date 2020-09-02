const express = require('express');
const router = new express.Router();
const User = require('../model/user');

router.post('/user/add', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ user });
    console.log(user);
  } catch (error) {
    res.status(400).send();
    console.log(error);
  }
});

router.get('/user/view', async (req, res) => {
  const user=await User.find(req.body);
  res.send(user);
});
module.exports = router;
