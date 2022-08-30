import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Project from '../components/Project';

const Projects: NextPage = () => {
  return (
    <div className="mx-10 my-5">
      <Head>
        <title>Projects</title>
        <meta name="theme-color" content="#8fcfd1" />
      </Head>
      <Navbar />
      <div className="flex justify-center pt-[50px]">
        <div className="flex flex-col text-center">
          <h1 className="text-7xl font-black">Projects</h1>
          <h4 className="font-medium pt-7 text-xl text-[#bac2de]">Below are a few hobby projects I have worked on in the past</h4>
          <div className="flex flex-col md:flex-row justify-center pt-10 space-y-10 md:space-x-10 md:space-y-0">
            <Project title="Website" description="My personal website also the website that you are seeing right now." repository="https://github.com/itsjon4s/website" />
            <Project title="Siesta" description="Siesta is a multiprupose music focused bot, with 200+ servers." repository="https://github.com/itsjon4s/siesta-bot" />
            <Project title="Quiz App" description="A FullStack Quiz web app using TypeScript and Next.js!" repository="https://github.com/itsjon4s/quiz-app" />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
