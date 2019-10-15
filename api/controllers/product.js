const Product = require('../models/product');
exports.add_car = (req, res, next) => {
    const product = new Product({
        carName: req.body.carName,
        carRegNo: req.body.carRegNo,
        modelNo: req.body.modelNo,
        seatingCap: req.body.seatingCap,
        rentPday: req.body.rentPday,
        bookStatus: req.body.bookStatus,
        issueDate: req.body.issueDate,
        returnDate: req.body.returnDate
    });
    product.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Car Added'
    });
}
exports.retreive_car_model = (req, res, next) => {
    const modelId = req.params.model;
    Product.find({modelNo:modelId})
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err=>
        {
            console.log(err);
            res.status(500).json({error:err});
    });
}
exports.retreive_car_date = (req,res,next)=>{
    const date = req.params.date;
    Product.find({issueDate:null})
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
}
exports.retreive_car_cap = (req,res,next)=>{
    const seatingCap=req.params.seatingCapacity;
    Product.find({seatingCapacity:seatingCap})
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
}
exports.del_car_regNo = (req,res,next)=>{
    const carNo=req.params.carRegNo;
    if(Product.findOne({carRegNo : carNo},'bookStatus')===false){
        Product.remove({carRegNo : carNo})
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    }
    else{
        res.status(200).json({
            message: "Car is currently booked please try again"
        })
    }
}
exports.book_car = (req, res, next) => {
    const regNo=req.params.regNo;
    if(Product.findOne({carRegNo:regNo},'bookStatus')===false){
        Product.update({carRegNo:regNo},{$set: {bookStatus:true}})
        .exec()
        .then(result=>{
            console.log(result);
            res.status(200).json({
                message : "car booked!!"
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error : err
            });
        });
    }
    else{
        res.status(200).json({
            message : "Sorry, car is already booked"
        });
    }
}