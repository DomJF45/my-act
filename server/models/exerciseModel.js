const mongoose = require('mongoose');

const exerciseInfo = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  breathingSpeed: Number,
  cardSort: [
    {value: String, importanceLevel: String}
  ],
  goalSetting: [
    {text: String, level: String, category: String}
  ],
  observer: [
    {
      emotion: String,
      story: String,
      values: String,
      actDefusion: String,
      valuesAction: String
    }
  ],
  thoughtLabel: [
    {thought: String, label: String}
  ],
  acceptanceSurvey: [
    {
      q1: String,
      q2: String,
      q3: String,
      q4: String,
      q5: String,
      q6: String,
      q7: String
    }
  ]

}, 
{
  timestamps: true
})

module.exports = mongoose.model('UserExerciseInfo', exerciseInfo);