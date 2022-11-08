import React, { useContext } from "react";
import styles from "./HabitList.module.scss";
import { HabitsContext } from "../../../context/habits.context";

import Habit from "../habit/Habit";
import { HabitType } from "../../../models/habits";

const HabitList = () => {
  const { habits } = useContext(HabitsContext);

  return (
    <section className={styles.habitList}>
      <h1>Habit List</h1>
      <ul className={styles.habits}>
        {habits.map((habit: HabitType) => {
          return (
            <>
              <Habit key={habit.id} {...habit} />
              <hr className={styles.habitDivider} />
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default HabitList;
