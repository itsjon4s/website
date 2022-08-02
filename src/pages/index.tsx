import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/Navbar";
import { Github, Discord, Spotify, Mail, Instagram } from "../components/Socials";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#ddd" />
        <meta name="description" content="My space on the web." />
      </Head>
      <NavBar />
      <div className="flex h-screen justify-center  pt-[100px]">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-7xl">Jon4s</h1>
          <h2 className="font-extralight pt-[5px] text-lg">
            Portugal, Aveiro, SMF
          </h2>
          <p className="text-xl font-normal pt-[15px]">
            Web Developer • Student
          </p>
          <div className="w-full justify-center text-7xl flex pt-[25px]">
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
