import express from 'express';
import sectionNameModel from '../models/sectionModel.js';
const uniqueChapterRouter = express.Router();

uniqueChapterRouter.get('/uniqueChapters', async (req, res) => {
  try {
    const uniqueChapters = await sectionNameModel
      .find()
      .distinct('chapter_title')
      .sort();
    if (!uniqueChapters || uniqueChapters.length === 0) {
      return res.status(404).json({ message: 'No chapters found' });
    }
    res.status(200).json(uniqueChapters);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default uniqueChapterRouter;
