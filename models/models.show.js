const mongoose = require('mongoose');

const blokSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    afbeelding: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: Array
    },
    uitgelicht: {
        required: true,
        type: Boolean
    },
    blok: {
        required: false,
        type: Number
    }
})

const Blok = mongoose.model('Show', blokSchema);
module.exports = Blok;