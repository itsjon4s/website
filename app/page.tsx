import Socials from './components/Socials';

const Page = () => (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-2 px-4">
        <h1 className="font-bold text-4xl text-white animate-pulse">João Mota</h1>
        <p className="text2xl  font-light">Web Developer • High School Student</p>
        <Socials />
      </div>
      {/* <div>
        <h1>Projects</h1>
      </div> */}
    </div>
);

export default Page;
