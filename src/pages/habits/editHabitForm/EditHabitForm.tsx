import React, { useContext } from "react";
import { HabitsContext } from "../../../context/habits.context";
import useInputState from "../../../hooks/useInputState";
import { UPDATE } from "../../../actions/index";
import styles from "./EditHabitForm.module.scss";

interface EditHabitFormProps {
  id: string;
  habit: string;
  toggleEditForm: () => void;
}

const EditHabitForm = ({ id, habit, toggleEditForm }: EditHabitFormProps) => {
  const { dispatch } = useContext(HabitsContext);
  const [value, handleChange, reset] = useInputState(habit);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: UPDATE, id: id, newHabit: value, habit: "" });
    reset();
    toggleEditForm();
  };

  return (
    <form className={styles.editHabitForm} onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange}></input>
    </form>
  );
};

export default EditHabitForm;
