const express = require('express');
const router = express.Router();
const Contact = require('../model/contactModel');

router.get('/',(req,res,next)=>{
   Contact.find()
   .exec()
   .then(result=>{
       console.log(result);
       res.status(200).json(result);
   })
   .catch(err=>{
      console.log(err);
   })
});

router.get('/:id',(req,res,next)=>{
    Contact.findById({_id:req.params.id})
    .then(result=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.send(err);
    })
});

router.post('/',(req,res,next)=>{
    const contact = new Contact({
        name:req.body.name,
        phoneNumber:req.body.phoneNumber
    });
    contact.save()
    .then(result=>{
        console.log('added successfully');
        res.status(200).json({
            message:'added successfully',
            Contact :result
        });
    })
    .catch(err=>{
        console.log(err);
    })
});

router.put('/:id',(req,res,next)=>{
    Contact.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            phoneNumber:req.body.phoneNumber
        }
    })
    .then(result=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
    })
});


router.delete('/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id})
    .then((doc)=>{
        console.log('removed successfully');
        res.status(200).json({
            message:'contact deleted',
            contact:doc
        });
    })
    .catch(err=>{
        console.log(err);
    });
});





module.exports = router;