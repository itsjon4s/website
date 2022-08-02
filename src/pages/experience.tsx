import NavBar from "../components/Navbar";
import Head from "next/head";

export default function Experience() {
  return (
    <div>
      <Head>
        <title>Jon4s - Experience</title>
        <meta name="theme-color" content="#ddd" />
        <meta name="description" content="My experiences within the real world and what I can say I am confident with." />
        <link rel="icon" href="/icon.png" />
        <meta property="og:image" content="/icon.png" />
      </Head>
      <NavBar />
      <div className="h-screen flex flex-col items-center text-center pt-[100px]">
        <h1 className="font-bold text-7xl">Experience</h1>
        <p className="font-extralight pt-[15px] text-xl">
          Listed down below is what you can see, my experiences within the real
          world and what I can say I am confident with
        </p>
        <div className="flex w-full justify-center text-center text-6xl pt-[20px]">
          soon
        </div>
      </div>
    </div>
  );
}
