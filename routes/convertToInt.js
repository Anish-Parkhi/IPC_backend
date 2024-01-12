import express from 'express';
import sectionNameModel from '../models/sectionModel.js';

const nameRouter = express.Router();

nameRouter.get('/convert/stringToInt', async (req, res) => {
  try {
    const result = sectionNameModel.updateMany(
      { Section: { $type: 'string' } },
      { $set: { Section: { $toInt: '$Section' } } }
    );
    res.status(200).json({
      message: `${result.modifiedCount} documents updated from string to integer`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

export default nameRouter;
