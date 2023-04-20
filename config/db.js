const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/A1U9ZR", { useNewUrlParser: true });

module.exports = mongoose;
