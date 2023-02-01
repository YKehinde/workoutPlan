export type PlanData = DayPlan[];

export type DayPlan = {
  day: string,
  workout: WorkoutPlan[],
};

export type WorkoutPlan = {
  name: string,
  weight: number,
  rest: number,
  weeks: Workout[]
};

export type Workout = {
  week: number,
  sets: number,
  reps: number
};
