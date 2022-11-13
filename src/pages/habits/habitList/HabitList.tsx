import React, { useContext } from "react";
import styles from "./HabitList.module.scss";
import { HabitsContext } from "../../../context/habits.context";

import Habit from "../habit/Habit";
import { HabitType } from "../../../models/habits";

const HabitList = () => {
  const { habits } = useContext(HabitsContext);

  if (habits.length)
    return (
      <div className={styles.habitList}>
        <h1>Habit List</h1>
        <ul className={styles.habits}>
          {habits.map((habit: HabitType) => {
            return (
              <div key={habit.id} className={habit.habit}>
                <Habit {...habit} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  return null;
};

export default HabitList;
