const { default: mongoose } = require("mongoose");

var db = mongoose.connect(process.env.db).then(() => {
    console.log('Connected to Database')
});

module.exports = db;