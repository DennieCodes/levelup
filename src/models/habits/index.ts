export type HabitType = {
  id: string;
  habit: string;
  completed: boolean;
};

export type HabitReducerAction = {
  type: "ADD" | "REMOVE" | "UPDATE" | "TOGGLE";
  habit: string;
  id: string;
  newHabit: string;
};
