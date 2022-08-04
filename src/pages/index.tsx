import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/Navbar";
import { Github, Discord, Spotify, Mail, Instagram } from "../components/Socials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="My space on the web." />
      </Head>
      <NavBar />
      <div className="flex justify-center pt-[50px]">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-7xl">Jon4s</h1>
          <h2 className="font-extralight pt-[5px] text-lg">
            Portugal, Aveiro, SMF
          </h2>
          <p className="text-xl font-normal pt-[15px]">
            Web Developer • Student
          </p>
          <div className="w-full justify-center text-6xl flex pt-[10px]">
            <Github />
            <Discord />
            <Spotify />
            <Mail />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
}
