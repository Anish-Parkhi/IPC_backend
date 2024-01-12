import express from 'express';
import sectionNameModel from '../models/sectionModel.js';

const sectionByNumberRouter = express.Router();

sectionByNumberRouter.get(
  '/sections/getByNumber/:section',
  async (req, res) => {
    const { section } = req.params;
    try {
      const sectionData = await sectionNameModel.find({ Section: { $eq: section } });
      res.status(200).json(sectionData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

export default sectionByNumberRouter;
