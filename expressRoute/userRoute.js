const express = require('express');
const userRouter = express.Router();

userRouter.get('/profile', (req, res) => {
    res.send('User Profile');
});

module.exports = userRouter;
