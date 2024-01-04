import mongoose from 'mongoose';
const schema = mongoose.Schema;

const sectionNameSchema = mongoose.Schema({
  chapter: {
    type: Number,
  },
  chapter_title: {
    type: String,
  },
  Section: {
    type: Number,
  },
  section_desc: {
    type: String,
  },
  section_title: {
    type: String,
  },
});

const sectionNameModel = mongoose.model(
  'sectionNameModel',
  sectionNameSchema,
  'sections'
);

export default sectionNameModel;
