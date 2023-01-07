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
        required: false,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    type: {
        required: false,
        type: String
    },
    genre: {
        required: true,
        type: Array
    },
    uitgelicht: {
        required: false,
        type: Boolean
    },
    blok: {
        required: false,
        type: Number
    }
})

const Blok = mongoose.model('Show', showSchema);
module.exports = Blok;