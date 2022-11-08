import React from "react";
import Image from "next/image";
import editIcon from "../../../images/icons/pencil.png";
import deleteIcon from "../../../images/icons/trash.png";
import { HabitType } from "../../../models/habits";
import styles from "./Habit.module.scss";

const Habit = ({ habit, completed }: HabitType) => {
  return (
    <li className={styles.habitItem}>
      <input type="checkbox" checked={completed} />
      <p className={styles.habitName}>{habit}</p>
      <Image src={editIcon} alt="Edit button" width={24} height={24} />
      <Image src={deleteIcon} alt="Delete button" width={24} height={24} />
    </li>
  );
};

export default Habit;
