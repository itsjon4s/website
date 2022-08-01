import Head from "next/head";
import { Github, Discord, Spotify } from "../components/Socials";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#17191a]">
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#17191a" />
        <meta name="description" content="My Personal WebSite" />
        <meta name="keywords" content="jon4s, jonas, jonas website, Jon4s" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className=" h-screen w-screen inline-flex flex-col text-center pt-[50px]">
        <h1 className="font-bold text-8xl">Jon4s</h1>
        <h2 className="font-light pt-[10px] text-xl">Portugal, Aveiro, SMF</h2>
        <p className="text-xl font-light">
          Web Developer • Student
        </p>
        <div className="w-full justify-center text-6xl flex">
          <Github />
          <Discord />
          <Spotify />
        </div>
      </div>
    </main>
  );
}
