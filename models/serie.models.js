const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please enter serie name"],
            default: 0
        },
        series: {
            type: String,
            require: true,
            default: 0
        },
        picture: {
            type: String,
            require: false
        },
    },
    {
        Timestamp: true
    }
);

const Serie = mongoose.model("Serie", seriesSchema);

module.exports = Serie ;