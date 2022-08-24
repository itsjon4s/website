import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import { Discord, Email, Github, Instagram, Spotify } from '../components/socials/index';

const Home: NextPage = () => {
  return (
    <div className="mx-10 my-5">
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#8fcfd1" />
        <meta name="description" content="My space on the web." />
      </Head>
      <NavBar />
      <div className="flex justify-center pt-[50px] h-full">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-8xl">Jon4s</h1>
          <h2 className="font-extralight pt-[5px] text-xl">Portugal, Aveiro</h2>
          <p className="text-2xl font-normal pt-[15px]">Web Developer • Student</p>
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
};

export default Home;
