require('./config/config');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('dotenv').config();

var usersRouter = require('./routes/Users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/usersPost', usersRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };