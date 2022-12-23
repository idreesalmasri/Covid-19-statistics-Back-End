'use strict'
const express = require('express');
const {record}=require("../models/index");
const router = express.Router();


const saveRecord = async(req,res)=>{
    try {
        let id=req.body.ID;
        let country0=req.body.Country;
        let date0=req.body.Date;
        const newRecord=await record.create({
            record_id:id,
            country:country0,
            date:date0,
        });
        res.status(200).json(newRecord);
    } catch (error) {
        res.status(403);
    }
}

router.post('/addRecord',saveRecord);


const getAllRecords =async (req,res)=>{
    try {
        const records=await record.findAll();
        res.status(200).json(records)
    } catch (error) {
        res.status(500).json(error);
    }
}

router.get('/getSavedrecords',getAllRecords);


const deleteRecord=async (req,res)=>{
    let id=req.params.id;
    const deleted=await record.destroy({where:{record_id:id}});
    res.status(204).json(deleted);
}

router.delete('/deleteRecord/:id',deleteRecord);


module.exports = router;