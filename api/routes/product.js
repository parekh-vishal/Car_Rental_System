const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');
const router = express.Router();
const carAdder= require('../controllers/product')
const carRetMod= require('../controllers/product')
const carRetDate = require('../controllers/product')
const carRetCap = require('../controllers/product')
const delCar = require('../controllers/product')
const bookCar = require('../controllers/product')
//Add New car to system
router.post('/',carAdder.add_car);
//Retrive car based on modelNo
router.get('/:model',carRetMod.retreive_car_model);
/*Retrieve All car if it available on that date
Since we use issueDate and Return date by default null
so we just retrive all car with null issueDate which are by dafault not booked
*/
router.get('/:date',carRetDate.retreive_car_date);
//Retrive All available car as per seating capacity
router.get('/:seatingCapacity',carRetCap.retreive_car_cap);
//use for deleting car 
router.delete('/:carRegNo',delCar.del_car_regNo);
//Use for Booking a car
router.patch('/:regNo',bookCar.book_car);
module.exports = router;