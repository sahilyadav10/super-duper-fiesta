import type { NextPage } from "next";
import Head from "next/head";
import CardLayout from "../src/components/layout/CardLayout";
import Login from "../src/components/login/Login";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <CardLayout>
            <Login />
          </CardLayout>
        </div>
      </main>
    </div>
  );
};

export default Home;
