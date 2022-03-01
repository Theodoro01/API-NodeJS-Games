const mongoose = require("../database/database")

const GameSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    year:{ 
        type: Number,
        require: true
    },
    price:{
        type: Number,
        require: true
    }
});
const Games = mongoose.model( "Games", GameSchema );

module.exports = Games;