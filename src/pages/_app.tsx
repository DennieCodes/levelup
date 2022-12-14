import "../../styles/index.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
// import CredentialsProvider from 'next-auth/providers/credentials';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
