const mongoose = require('mongoose');

const radioSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    shortTitle: {
        required: true,
        type: String,
    },
    icon: {
        required: true,
        type: String
    },
    thumbnail: {
        required: true,
        type: String
    },
    selected: {
        required: true,
        type: Boolean
    }
})

const Radio = mongoose.model('Radio', radioSchema);
module.exports = Radio;