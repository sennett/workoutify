export const modifyWorkout = (rawWorkoutData) => ({
  type: ACTION_TYPE,
  rawWorkoutData: rawWorkoutData
})

export const ACTION_TYPE = Symbol('MODIFY_WORKOUT')
