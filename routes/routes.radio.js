const express = require('express');
const router = express.Router();
const Radio = require('../models/models.radio');

router.post('/radiostations', async (req, res) => {
    const data = new Radio({
        title: req.body.title,
        shortTitle: req.body.shortTitle,
        icon: req.body.icon,
        thumbnail: req.body.thumbnail,
        selected: req.body.selected
    });
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})


router.get('/radiostations', async (req, res) => {
    try {
        const data = await Radio.find();
        res.json(data);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
})

router.patch('/radiostations/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const result = await Radio.findByIdAndUpdate(id, updatedData, options);
        res.send(result)
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;