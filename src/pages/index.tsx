import type { NextPage } from 'next';
import Head from 'next/head';
import { Email, Github, Instagram, Spotify } from '../components/socials/index';

const Home: NextPage = () => {
  return (
    <div className="mx-10">
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#8fcfd1" />
        <meta name="description" content="My space on the web." />
      </Head>
      <div className="flex justify-center items-center h-screen pb-20">
        <div className="flex flex-col text-center">
          <h1 className="font-black text-6xl ">
            Hello, I am
            <span className="text-blue"> Jon4s</span>!
          </h1>
          <p className="text-3xl font-normal pt-[15px] text-subtext">Web Developer • High School Student</p>
          <div className="w-full justify-center text-6xl md:text-7xl flex pt-[10px] space-x-3">
            <Instagram />
            <Spotify />
            <Github />
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
