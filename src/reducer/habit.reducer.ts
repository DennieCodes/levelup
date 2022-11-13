import { v4 as uuidv4 } from "uuid";
import { ADD, REMOVE, TOGGLE, UPDATE } from "../actions";
import { HabitType, HabitReducerAction } from "../models/habits";

const reducer = (
  state: HabitType[],
  action: HabitReducerAction
): HabitType[] => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        { id: uuidv4(), habit: action.habit, completed: false },
      ];
    case REMOVE:
      return state.filter((habit: HabitType) => habit.id !== action.id);
    case TOGGLE:
      return state.map((habit: HabitType) =>
        habit.id === action.id
          ? { ...habit, completed: !habit.completed }
          : habit
      );
    case UPDATE:
      return state.map((habit: HabitType) =>
        habit.id === action.id ? { ...habit, habit: action.newHabit } : habit
      );
    default:
      return state;
  }
};

export default reducer;
