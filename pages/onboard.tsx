import type { NextPage } from "next";
import Head from "next/head";
import OnboardJourney from "../src/components/onboard/OnboardJourney";

const Onboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 min-h-screen">
        <OnboardJourney />
      </main>
    </div>
  );
};

export default Onboard;
