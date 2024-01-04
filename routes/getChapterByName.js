import express from 'express';
import sectionNameModel from '../models/sectionModel.js';

const getChapterRouter = express.Router();

getChapterRouter.get('/sections/:chapter_title', async (req, res) => {
  const { chapter_title } = req.params;
  console.log(req.params);
  try {
    const chapterTitles = await sectionNameModel.find({
      chapter_title: chapter_title,
    });
    if (!chapterTitles || chapterTitles.length === 0) {
      return res
        .status(404)
        .json({ message: 'No sections found for the given chapter number' });
    }
    res.status(200).json(chapterTitles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default getChapterRouter;
