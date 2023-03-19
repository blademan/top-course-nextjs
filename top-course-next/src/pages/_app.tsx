import "@/styles/globals.css";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from 'next/head';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <Head>
      <title >My Top Course APP</title>

    </Head>
    <Component {...pageProps} /></>)
};

export default MyApp;
