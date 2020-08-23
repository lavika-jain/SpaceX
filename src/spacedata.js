const express= require('express');
const axios= require('axios');

exports.getData= async function(req, res) {
    console.log('inside spacedata');

    const resp= await axios.get('https://api.spaceXdata.com/v3/launches?limit=100');
    try{

        if(resp){
            res.status(200).json(resp.data);
        }
    }catch(error){
        res.status(400).json({msg: 'Error in getting Space data APi response'});
    }

    }