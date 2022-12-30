'use client';

import Socials from './Socials';

const Home = () => {
  return (
  <div className="flex items-center px-7 py-7 md:py-24 md:px-24">
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold text-6xl text-center justify-center">
        Hello, I am
        <span className="text-blue"> Jon4s</span>!
      </h1>
      <p className="text-2xl text-center justify-center font-normal">Web Developer • High School Student</p>
      <Socials />
    </div>
  </div>
  );
};

export default Home;
