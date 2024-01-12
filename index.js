import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import getChapterRouter from './routes/getChapterByName.js';
import sectionByNumberRouter from './routes/getSectionByNumber.js';
import uniqueChapterRouter from './routes/getUniqueChapters.js';
import searchBarQueryRouter from './routes/searchBarQuery.js';
import router from './routes/sections.js';
import nameRouter from './routes/convertToInt.js';

const MONGODB_URI =
  'mongodb+srv://anishparkhi2023:anish3377@ipc.7zjpaqw.mongodb.net/ipc?retryWrites=true&w=majority';
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.use('/api', uniqueChapterRouter);
app.use('/api', getChapterRouter);
app.use('/api', sectionByNumberRouter);
app.use('/api', searchBarQueryRouter);
app.use('/api',nameRouter);
mongoose
  .connect(MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error: ', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
