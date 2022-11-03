import React, { useState } from "react";
import styles from "./NewHabitForm.module.scss";
import useInputState from "../../../hooks/useInputState";

export default function NewHabitForm() {
  const [title, setTitle, resetTitle] = useInputState("");
  const [established, setEstablished] = useState(false);
  const [metric, setMetric, resetMetric] = useInputState("");

  const handleFormSubmission = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // NOTE: dispatch should be called here for handling the form data once context and reducers are established

    resetTitle();
    resetMetric();
    setEstablished(false);
  };

  const handleChangeEstablished = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstablished(e.currentTarget.checked);
  };

  return (
    <form className={styles.newHabitForm} onSubmit={handleFormSubmission}>
      <label className={styles.titleLabel} htmlFor="title">
        Add Habit
        <input
          type="text"
          id="title"
          placeholder="Habit Name"
          onChange={setTitle}
          value={title}
        />
      </label>

      <div className={styles.established}>
        <input
          onChange={handleChangeEstablished}
          type="checkbox"
          id="established"
          name="established"
          checked={established}
        />
        <label htmlFor="established">Established Habit</label>
      </div>

      <div className={styles.metric}>
        <input
          value={metric}
          onChange={setMetric}
          type="text"
          id="metric"
          placeholder="Metric"
        />
        <label htmlFor="metric">Metric</label>
      </div>

      <button className={styles.submitButton}>Submit</button>
    </form>
  );
}
