import Head from "next/head";
import NavBar from "../components/Navbar";
import { Github, Discord, Spotify } from "../components/Socials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#17191a" />
        <meta name="description" content="My space on the web." />
        <meta name="keywords" content="jon4s, jonas, jonas website, Jon4s" />
        <link rel="icon" href="/icon.png" />
        <meta property="og:image" content="/icon.png" />
      </Head>
      <NavBar />
      <div className="h-screen flex flex-col text-center pt-[100px]">
        <h1 className="font-bold text-8xl">Jon4s</h1>
        <h2 className="font-light pt-[10px] text-xl">Portugal, Aveiro, SMF</h2>
        <p className="text-xl font-light">Web Developer • Student</p>
        <div className="w-full justify-center text-6xl flex">
          <Github />
          <Discord />
          <Spotify />
        </div>
      </div>
    </div>
  );
}
