import express from 'express';
import sectionNameModel from '../models/sectionModel.js';

const router = express.Router();

router.get('/sections', async (req, res) => {
  try {
    const data = await sectionNameModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/sections/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const section = await sectionNameModel.findById(id);
    res.status(200).json(section);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post('/sectionsAdd', async (req, res) => {
  const { chapter, chapter_title, Section, section_desc, section_title } =
    req.body;

  const newChapter = new sectionNameModel({
    chapter,
    chapter_title,
    Section,
    section_desc,
    section_title,
  });

  try {
    await newChapter.save();
    res.status(201).json({ message: 'Chapter added successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export default router;
