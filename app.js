const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { db } = require('./utils/config');
const PORT = 8080;
const app = express();


app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);

const authRouter = require('./routes/auth.routes');
app.use('/auth', authRouter);

const userRouter = require('./routes/user.routes');
app.use('/users', userRouter);

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("Successfully connected to database"))
    .catch(err => console.log(err, db));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
