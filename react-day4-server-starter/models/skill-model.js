const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('./user-model');

const skillSchema = new Schema({
  title: String,
  description: String,
  owner: {type: Schema.Types.ObjectId, ref:'User'},
  skillUserRating: Number,
  averageRating: Number,
  usedCounter: Number,
  category: {type: String, required: true},
  location: {type: {type: String}, coordinates: [Number]},
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;