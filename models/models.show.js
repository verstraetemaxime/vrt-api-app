const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
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
        required: false,
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

const Blok = mongoose.model('Show', showSchema);
module.exports = Blok;