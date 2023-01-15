const mongoose = require('mongoose');
const {
  breathingSchema,
  cardSortSchema,
  goalSettingSchema,
  observerSchema,
  thoughtLabelSchema,
  acceptanceSurveySchema
} = require('./exerciseModel');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  userType: {
    type: String,
    required: [true, 'Please indicate what type of user you are']
  },
  password: {
    type: String,
    requried: [true, 'Please add an email'],
  }
})

module.exports = mongoose.model('User', userSchema);