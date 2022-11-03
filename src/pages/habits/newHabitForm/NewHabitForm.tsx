import styles from "./NewHabitForm.module.scss";

export default function NewHabitForm() {
  return (
    <form className={styles.newHabitForm}>
      <label className={styles.titleLabel} htmlFor="title">
        Add Habit
        <input type="text" id="title" placeholder="Habit Name" />
      </label>

      <div className={styles.established}>
        <input type="checkbox" id="established" />
        <label htmlFor="established">Established Habit</label>
      </div>

      <div className={styles.metric}>
        <input type="text" id="metric" placeholder="Metric" />
        <label htmlFor="metric">Metric</label>
      </div>

      <button className={styles.submitButton}>Submit</button>
    </form>
  );
}
