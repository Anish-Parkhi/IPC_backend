import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/sections.js';
import uniqueChapterRouter from './routes/getUniqueChapters.js';
import getChapterRouter from './routes/getChapterByNumber.js';

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

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
