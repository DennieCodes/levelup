import styles from "./Habits.module.scss";
import NewHabitForm from "./newHabitForm";
import { HabitsProvider } from "../../context/habits.context";
import HabitList from "./habitList";

export default function Habits() {
  return (
    <main className={styles.container}>
      <h1>Habits</h1>
      <section className={styles.habitsUI}>
        <HabitsProvider>
          <HabitList />
          <NewHabitForm />
        </HabitsProvider>
      </section>
    </main>
  );
}
