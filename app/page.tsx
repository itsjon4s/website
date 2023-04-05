import Socials from './components/Socials';

const Page = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="flex flex-col space-y-2 px-4">
        <h1 className="font-bold text-4xl justify-center text-white animate-pulse">Jon4s</h1>
        <p className="text2xl justify-center font-light">Web Developer • High School Student</p>
        <Socials />
      </div>
    </div>
    );
}

export default Page;
