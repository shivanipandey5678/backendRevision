

const express = require('express');
const app = express();
const userRouter = require('./userRouter');
const personRoute =require("./personal")

app.use('/users', userRouter);
app.use("/person",personRoute);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
