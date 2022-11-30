const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:6512/CakeCatalog")
    .then(()=>console.log("DB Connected."))
