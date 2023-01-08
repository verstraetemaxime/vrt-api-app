const express = require('express');
const router = express.Router();
const Blok = require('../models/models.blok');

//Post Method
router.post('/blokken', async (req, res) => {
    const data = new Blok({
        order: req.body.order,
        title: req.body.title,
        visible: req.body.visible
    });
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/blokken', async (req, res) => {
    try {
        const data = await Blok.find();
        res.json(data);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
})

//Get by ID Method
router.get('/blokken/:id', async (req, res) => {
    try {
        const data = await Blok.findById(req.params.id);
        res.json(data);
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/blokken/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const result = await Blok.findByIdAndUpdate(id, updatedData, options);
        res.send(result)
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
})

//Delete by ID Method
router.delete('/blokken/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Blok.findByIdAndDelete(id);
        res.send(`Doc with ${data.name} has been deleted`);
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;