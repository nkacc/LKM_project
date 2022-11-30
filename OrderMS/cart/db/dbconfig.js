const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:6522/Order")
    .then(()=>console.log("DB Connected."))
