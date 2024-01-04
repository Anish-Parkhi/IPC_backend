import sectionNameModel from "../models/sectionModel";
import express from "express";

const getSectionByIdRouter = express.Router()

getSectionByIdRouter.get('/sections/:id', async (req, res)  => {
    const {_id} = req.params.id;
    try {
        const chapters = await sectionNameModel.find({_id: id})
        res.status(200).json(chapters)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default getSectionByIdRouter;