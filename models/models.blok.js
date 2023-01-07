const mongoose = require('mongoose');

const blokSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
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
    }
})

const Blok = mongoose.model('Blok', blokSchema);
module.exports = Blok;