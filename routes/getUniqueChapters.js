// import express from 'express';
// import sectionNameModel from '../models/sectionModel.js';
// const uniqueChapterRouter = express.Router();

// uniqueChapterRouter.get('/uniqueChapters', async (req, res) => {
//   try {
//     const uniqueChapters = await sectionNameModel
//     // aggregate([
//     //   {
//     //     $group: {
//     //       _id: { chapter: '$chapter', chapter_title: '$chapter_title' },
//     //     },
//     //   },
//     // ]);
//     // .find({},"chapter chapter_title")
    
//     .sort({ chapter : "asc"})
//     if (!uniqueChapters || uniqueChapters.length === 0) {
//       return res.status(404).json({ message: 'No chapters found' });
//     }
//     res.status(200).json(uniqueChapters);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

// export default uniqueChapterRouter;

import express from 'express';
import sectionNameModel from '../models/sectionModel.js';
const uniqueChapterRouter = express.Router();

uniqueChapterRouter.get('/uniqueChapters', async (req, res) => {
  try {
    const uniqueChapters = await sectionNameModel
      .find()
      .distinct('chapter_title')
    if (!uniqueChapters || uniqueChapters.length === 0) {
      return res.status(404).json({ message: 'No chapters found' });
    }
    res.status(200).json(uniqueChapters);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default uniqueChapterRouter;
