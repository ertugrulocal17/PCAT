/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CONNECT DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// CREATE SCHEMA
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

// CREATE MODEL
const Photo = mongoose.model('Photo', PhotoSchema);

// CREATE A PHOTO
/*
Photo.create({
  title: 'Photo 2',
  description: 'Photo description 2 lorem ipsum',
});
*/

// READ A PHOTO
/*
Photo.find({}, (err, data) => {
  console.log(data);
});
*/

// UPDATE PHOTO
/*
const id = '622b3e8fe85b8e0c8171b464';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 111 Updated',
    description: 'Photo description 111 updated',
  },
  { new: true },
  (err, data) => {
    console.log(data);
  }
);
*/
/*
// DELETE A PHOTO
const id = '622b3fc44b2e3def48105bd3';

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed');
});
*/
