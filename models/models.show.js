const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
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
    }
})

const Blok = mongoose.model('Show', showSchema);
module.exports = Blok;