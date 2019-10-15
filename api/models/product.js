const mongoose= require('mongoose');
const carInfo= mongoose.Schema({
    carName : String,
    carRegNo : String,
    modelNo : Number,
    seatingCap : Number,
    rentPday : Number,
    bookStatus : Boolean,
    issueDate : {type: Date, default: null},
    returnDate : {type: Date, default: null},
});
module.exports = mongoose.model('Product',carInfo)