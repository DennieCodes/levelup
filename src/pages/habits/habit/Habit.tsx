import React, { useContext } from "react";
import Image from "next/image";
import editIcon from "../../../images/icons/pencil.png";
import deleteIcon from "../../../images/icons/trash.png";
import { HabitType } from "../../../models/habits";
import styles from "./Habit.module.scss";
import { TOGGLE, REMOVE } from "../../../actions";
import { HabitsContext } from "../../../context/habits.context";
import useToggleState from "../../../hooks/useToggleState";
import EditHabitForm from "../editHabitForm";

const Habit = ({ habit, completed, id }: HabitType) => {
  const { dispatch } = useContext(HabitsContext);
  const [isEditing, toggleEditing] = useToggleState(false);

  return (
    <li className={styles.habitItem}>
      {isEditing ? (
        <EditHabitForm id={id} habit={habit} toggleEditForm={toggleEditing} />
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {
              dispatch({ type: TOGGLE, id: id, habit: "", newHabit: "" });
            }}
          />
          <p className={styles.habitName}>{habit}</p>

          <button
            className={styles.habitControls}
            aria-label="Edit"
            onClick={toggleEditing}
          >
            <Image src={editIcon} alt="Edit button" width={24} height={24} />
          </button>

          <button
            className={styles.habitControls}
            aria-label="Delete"
            onClick={() =>
              dispatch({ type: REMOVE, id: id, habit: "", newHabit: "" })
            }
          >
            <Image
              src={deleteIcon}
              alt="Delete button"
              width={24}
              height={24}
            />
          </button>
        </>
      )}
    </li>
  );
};

export default Habit;
