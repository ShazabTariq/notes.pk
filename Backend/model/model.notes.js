import mongoose from 'mongoose';

const noteschema = mongoose.Schema({
  name: String,
  price: String,
  category: String,
  image: String,
  title: String,
});

const Notes = mongoose.model('Notes', noteschema);

export default Notes;
