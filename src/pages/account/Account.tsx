import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Profile from "./Profile";
import styles from "./Account.module.scss";

export default function Account() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <main className={styles.container}>
      <h1>Account</h1>
      <div className={styles.loginSignup}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Profile session={session} />
        )}
      </div>
    </main>
  );
}
