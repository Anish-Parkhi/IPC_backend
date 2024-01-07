import express from 'express';
import sectionNameModel from '../models/sectionModel.js';

const searchBarQueryRouter = express.Router();

searchBarQueryRouter.get('/sectionTitle/:searchTerm', async (req, res) => {
  const { searchTerm } = req.params;
  const query = { section_title: { $regex: searchTerm, $options: 'i' } };
  try {
    const queryResult = await sectionNameModel.find(query);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default searchBarQueryRouter;
