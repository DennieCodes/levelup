import { useState } from "react";
import "../../styles/index.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  );
}

export default MyApp;
