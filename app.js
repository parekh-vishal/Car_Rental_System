const express = require('express');
const productRoutes = require('./api/routes/product');
const bookingRoutes = require('./api/routes/book');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/carRental',{
    useMongoClient : true
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;