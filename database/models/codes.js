const { default: mongoose } = require("mongoose");

module.exports = mongoose.model('Codes', new mongoose.Schema({
    period: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: false
    },
    teacher: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false
    },
    class: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false
    },
    students: {
        type: mongoose.SchemaTypes.Array,
        required: true,
        unique: false,
        default: []
    },
    expired: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        unique: false,
        default: false
    },
    code: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false
    },
    date: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false
    },
    identifier: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    }
}));