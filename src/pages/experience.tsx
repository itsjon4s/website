import NavBar from "../components/Navbar";
import Head from "next/head";

export default function Experience() {
  return (
    <div>
      <Head>
        <title>Jon4s - Experience</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="My experiences within the real world and what I can say I am confident with."
        />
      </Head>
      <NavBar />
      <div className="flex justify-center pt-[100px]">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-6xl">Experience</h1>
          <p className="font-extralight pt-[5px] text-lg">
            Listed down below is what you can see, my experiences within the
            real world and what I can say I am confident with
          </p>
          <div className="w-full justify-center text-7xl flex pt-[25px]">
            soon
          </div>
        </div>
      </div>
    </div>
  );
}
