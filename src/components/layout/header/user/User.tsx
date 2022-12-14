import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const User = () => {
  const { data: session } = useSession();

  const logoutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    void signOut();
  };

  return (
    <div>
      {session && session.user !== undefined ? (
        <div>
          <p>Welcome, {session.user.name}</p>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <Link href="/account">Login</Link>
      )}
    </div>
  );
};

export default User;
