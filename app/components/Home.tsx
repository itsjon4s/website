'use client';

import type { NextPage } from 'next';
import Socials from './Socials';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen pb-20">
      <div className="flex flex-col text-center">
        <h1 className="font-black text-6xl ">
          Hello, I am
          <span className="text-blue"> Jon4s</span>!
        </h1>
        <p className="text-3xl font-normal pt-[15px] text-subtext">Web Developer • High School Student</p>
        <Socials />
      </div>
    </div>
  );
};

export default Home;
