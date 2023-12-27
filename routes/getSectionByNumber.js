import express from 'express';
import sectionNameModel from '../models/sectionModel.js';

const sectionNumberRouter = express.Router();

sectionNumberRouter.get(
  '/sections/chapter/:chapterNumber',
  async (req, res) => {
    const { chapterNumber } = req.params;
    try {
      const chapters = await sectionNameModel.find({
        chapter: parseInt(chapterNumber),
      });
      if (!chapters || chapters.length === 0) {
        return res
          .status(404)
          .json({ message: 'No chapters found for the given chapter number' });
      }

      res.status(200).json(chapters);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

export default sectionNumberRouter;
