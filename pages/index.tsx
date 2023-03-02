import type { NextPage } from "next";
import Head from "next/head";
import LayoutCenter from "../src/components/layout/LayoutCenter";
import Login from "../src/components/login/Login";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full m-0">
        <LayoutCenter>
          <Login />
        </LayoutCenter>
      </main>
    </div>
  );
};

export default Home;
