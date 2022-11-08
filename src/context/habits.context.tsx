import React, { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import habitReducer from "../reducer/habit.reducer";
import { HabitType, HabitReducerAction } from "../models/habits";

const defaultHabit: HabitType[] = [
  {
    id: uuidv4(),
    habit: "Test Habit",
    completed: false,
  },
];

interface HabitsContextType {
  habits: HabitType[];
  dispatch: React.Dispatch<HabitReducerAction>;
}

export const HabitsContext = createContext<HabitsContextType>(
  {} as HabitsContextType
);

export function HabitsProvider({ children }: { children: React.ReactNode }) {
  const [habits, dispatch] = useLocalStorageReducer(
    "habits",
    defaultHabit,
    habitReducer
  );

  return (
    <HabitsContext.Provider value={{ habits, dispatch }}>
      {children}
    </HabitsContext.Provider>
  );
}
