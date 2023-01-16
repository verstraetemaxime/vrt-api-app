const mongoose = require('mongoose');

const blokSchema = new mongoose.Schema({
    order: {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    visible: {
        required: true,
        type: Boolean
    },
    shows: {
        required: false,
        type: Array
    }
})

const Blok = mongoose.model('Blokken', blokSchema);
module.exports = Blok;