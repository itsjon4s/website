import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Tech from '../components/Tech';

const Experience: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <NavBar />
      <div className="flex justify-center pt-[50px]">
        <div className="flex flex-col text-center">
          <h1 className="font-black text-7xl">About</h1>
          <div className="font-medium pt-[5px] text-lg mr-[10px] mf-[10px] text-subtext">
            <h4>
              {'Hello, Im a Portuguese high school student and a web developer.'}
              <div>
                {'In the internet im more known as '}
                <strong>Jonas </strong>
                {'But my real name is '}
                <strong>João </strong>
                <div>
                  I have been programing for like a<strong> year and a half</strong> and this is currently my techstack:
                </div>
              </div>
            </h4>
          </div>
          <div className="text-xl flex flex-col flex-wrap">
            <div className="flex justify-center flex-wrap">
              <Tech text="TypeScript" />
              <Tech text="JavaScript" />
              <Tech text="React" />
              <Tech text="Nextjs" />
              <Tech text="HTML" />
            </div>
            <div className="flex justify-center flex-wrap">
              <Tech text="CSS" />
              <Tech text="TailwindCSS" />
              <Tech text="MongoDB" />
              <Tech text="PostgreSQL" />
              <Tech text="Linux" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
