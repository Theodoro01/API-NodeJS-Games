const express = require("express");
const Games = require("../models/Schema")
const router = express.Router();

router.post("/game", async (req,res) => {
    const {title} = req.body;
    try{
        if( await Games.findOne({ title })){
            return  res.status(400).send( { error: 'Game already exists' });
        }
        const games = await Games.create(req.body)
    
        return res.status(200).send({ games })

    }catch(err){
        return res.status(400).send( { error: "Registration failed" });
    } 
});

router.get("/games", async (req, res) => {
    try{
        const games = await Games.find()
        return res.status(200).json({games: games})
    }catch(err){
        return res.status(400).json({error: "Ocorreu um erro!"});
    }
    
});

router.get("/game/:_id", async (req, res) => {
   
    const { _id }  = req.params;
    try{
        const game =  await Games.findOne({ _id });

        if(!game)
            return res.status(400).json({ error: "Game not found"});

        return res.status(200).json({game: game})

    }catch(err){
        return res.status(400).json({error: "Ocorreu algum erro."})
    }
});

router.delete("/game/:_id", async (req, res) => {
    const { _id }  = req.params;
    try{
        const game =  await Games.findByIdAndDelete({ _id });

        if(!game)
            return res.status(400).json({ error: "Game not found"});

        return res.status(200).json({game: game})

    }catch(err){
        return res.status(400).json({error: "Ocorreu algum erro."})
    }
});

router.put("/game", async (req, res) => {
    const {_id, title, year, price } = req.body;
    try{
        var data = { title, year, price};
        const game = await Games.findByIdAndUpdate({_id}, data, {new: true})
        return res.status(200).json(game);
    }catch(err){
        return res.status(400).json({error: "Error!"})
    }
});

module.exports = app => app.use("/auth", router);