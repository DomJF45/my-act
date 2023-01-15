const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const UserExerciseInfo = require('../models/exerciseModel');

const initUser = asyncHandler(async (req, res) => {

  const user = req.user;

  const newExerciseInfo = await UserExerciseInfo.create({
    user: req.user.id,
    breathingSpeed: 5,
    cardSort: [
      {value: '', importanceLevel: ''}
    ],
    goalSetting: [
      {text: '', level: ''}
    ]
  })
  if (newExerciseInfo) {
    res.status(201).json({
      user,
      breathingSpeed: newExerciseInfo.breathingSpeed,
      cardSort: newExerciseInfo.cardSort,
      goalSetting: newExerciseInfo.goalSetting
    })
  }
})

// breathing speed
module.exports = {
  initUser
}

