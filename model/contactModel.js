const mongoose = require('mongoose');

contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
});

const Contact = module.exports = mongoose.model('Contact',contactSchema);