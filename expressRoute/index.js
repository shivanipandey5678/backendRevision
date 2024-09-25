



const express = require('express');
const app = express();
const userRouter = require('./userRouter');

app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
