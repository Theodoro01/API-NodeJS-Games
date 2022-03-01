const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apicomnode').then(() => {
    console.log("Conectado!")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose;