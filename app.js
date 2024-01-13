import 'dotenv/config'
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import nameRouter from './routes/convertToInt.js';
import getChapterRouter from './routes/getChapterByName.js';
import sectionByNumberRouter from './routes/getSectionByNumber.js';
import uniqueChapterRouter from './routes/getUniqueChapters.js';
import searchBarQueryRouter from './routes/searchBarQuery.js';
import router from './routes/sections.js';

const MONGODB_URI = process.env.MONGODB_URL;
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.use('/api', uniqueChapterRouter);
app.use('/api', getChapterRouter);
app.use('/api', sectionByNumberRouter);
app.use('/api', searchBarQueryRouter);
app.use('/api', nameRouter);
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
