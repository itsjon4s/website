import type { NextPage } from 'next';
import Head from 'next/head';
import { Discord, Email, Github, Instagram, Spotify } from '../components/socials/index';

const Home: NextPage = () => {
  return (
    <div className="mx-10  ">
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#8fcfd1" />
        <meta name="description" content="My space on the web." />
      </Head>
      <div className="flex justify-center items-center h-screen pb-20">
        <div className="flex flex-col text-center">
          <h1 className="font-black text-5xl ">
            Hello, I am
            <span className="text-blue"> Jon4s</span>!
          </h1>
          <h2 className="font-medium pt-[5px] text-xl text-subtext">Portugal</h2>
          <p className="text-2xl font-normal pt-[15px] text-subtext">Web Developer • High School Student</p>
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
