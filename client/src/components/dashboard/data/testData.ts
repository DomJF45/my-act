export interface iProcessScores {
  'process': string,
  'user': number,
  'fullMark': number
}

export interface iExerciseData {
  'exercise': string,
  'completed': number,
  incompleted: number
}

export interface iTestData {
  userName: string,
  value_score: iProcessScores[],
  userTimeData: {
    totalHours: number,
    daysAccessed: 0,
    streak: 0
  }
  exerciseData: iExerciseData[]
}

export const testData: iTestData = {
  userName: 'John',
  value_score: [
    {'process': 'Present', 'user': 100, 'fullMark': 150},
    {'process': 'Values', 'user': 80, 'fullMark': 150},
    {'process': 'Committment', 'user': 67, 'fullMark': 150},
    {'process': 'Self', 'user': 120, 'fullMark': 150},
    {'process': 'Defusion', 'user': 95, 'fullMark': 150},
    {'process': 'Acceptance', 'user': 70, 'fullMark': 150}
  ],
  userTimeData: {
    totalHours: 0,
    daysAccessed: 0,
    streak: 0
  },
  exerciseData: [
    {'exercise': 'Breathing', 'completed': 50, 'incompleted': 10},
    {'exercise': 'Card Sort', 'completed': 28, 'incompleted': 30},
    {'exercise': 'Goal Setting', 'completed': 30, 'incompleted': 5},
    {'exercise': 'Observer', 'completed': 10, 'incompleted': 3},
    {'exercise': 'Label Thoughts', 'completed': 20, 'incompleted': 1},
    {'exercise': 'Acceptance Survey', 'completed': 5, 'incompleted': 0}
  ]
}