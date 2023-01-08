const express = require('express');
const router = express.Router();
const Show = require('../models/models.show');

//Post Method
router.post('/shows', async (req, res) => {
    const data = new Show({
        id: req.body.id,
        title: req.body.title,
        afbeelding: req.body.afbeelding,
        description: req.body.description,
        type: req.body.type,
        genre: req.body.genre,
        uitgelicht: req.body.uitgelicht,
        blok: req.body.blok
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
router.get('/shows', async (req, res) => {
    try {
        // const data = await Show.find();
        // res.json(data);
        res.json(req.query);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
})

//Get by ID Method
router.get('/shows/:id', async (req, res) => {
    try {
        const data = await Show.findById(req.params.id);
        res.json(data);
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/shows/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const result = await Show.findByIdAndUpdate(id, updatedData, options);
        res.send(result)
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
})

//Delete by ID Method
router.delete('/shows/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Show.findByIdAndDelete(id);
        res.json(data);
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;