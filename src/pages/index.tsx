import { type NextPage } from "next";
import Head from "next/head";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> 6c875fa039e75cd5fb4b2dda3791ae8973aa5f47
import BasicNavigation from "~/components/BasicNavigation/BasicNavigation";
/* import { signIn, signOut, useSession } from "next-auth/react"; */

/** import { api } from "~/utils/api"; */

const Home: NextPage = () => {
<<<<<<< HEAD
  /** const hello = api.example.hello.useQuery({ text: ", we're walking each other home" }); */
=======
  const hello = api.example.hello.useQuery({ text: ", we're walking each other home" });
>>>>>>> 6c875fa039e75cd5fb4b2dda3791ae8973aa5f47

  return (
    <>
      <Head>
        <title>Dying Lotus Philosophy</title>
        <meta name="description" content="Dying Lotus Philosophy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Dying <span className="text-[hsl(280,100%,70%)]">Lotus</span> Philosophy
          </h1>
          <h2 className="text-3xl text-white">Walking Each Other Home</h2>
          <BasicNavigation includeIndex={false}></BasicNavigation>
        </div>
      </main>
    </>
  );
};

export default Home;

{/**
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
 */}

