import Head from 'next/head';
import NavBar from '../components/Navbar';
import { Discord, Email, Github, Instagram, Spotify } from '../components/socials/index';

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
          <h2 className="font-extralight pt-[5px] text-lg">Portugal, Aveiro</h2>
          <p className="text-xl font-normal pt-[15px]">Web Developer • Student</p>
          <div className="w-full justify-center text-6xl flex pt-[10px] space-x-3">
            <Github />
            <Discord />
            <Spotify />
            <Email />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
}
