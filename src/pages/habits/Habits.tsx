import styles from "./Habits.module.scss";
import NewHabitForm from "./newHabitForm";

export default function Habits() {
  return (
    <main className={styles.container}>
      <h1>Habits</h1>
      <section className={styles.habitsUI}>
        <NewHabitForm />
      </section>
    </main>
  );
}
