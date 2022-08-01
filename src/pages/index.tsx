import Head from "next/head";
import { Github, Discord, Spotify } from "../components/socials";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#17191a]">
      <Head>
        <title>Jonas</title>
        <meta name="description" content="My Personal WebSite" />
        <meta name="keywords" content="jon4s, jonas, jonas website, Jon4s" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className=" h-screen w-screen inline-flex flex-col text-center pt-[50px]">
        <h1 className="font-black text-6xl">Jonas</h1>
        <h2 className="font-light pt-[10px] text-lg">Portugal, Aveiro, SMF</h2>
        <p className="text-[1.25em] mt-[0.75em] font-light">
          Web Developer • Student
        </p>
        <div className="w-full justify-center text-5xl flex">
          <Github />
          <Discord />
          <Spotify />
        </div>
      </div>
    </main>
  );
}
