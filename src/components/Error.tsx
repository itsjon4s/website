import type { NextPage } from 'next';
import Link from 'next/link';

interface ErrorProps {
  code: number;
  message: string;
}

const Error: NextPage<ErrorProps> = (props: ErrorProps) => {
  return (
    <div>
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="font-bold text-7xl md:text-8xl ">{props.code}</h1>
        <p className="font-base text-4xl md:text-6xl">{props.message}</p>
        <Link href="/">
          <a className="flex justify-center">
            <div className="bg-[#313244] text-3xl md:text-4xl font-bold w-30 mt-3 rounded-lg px-4 py-3 md:px-6 md:py-5">Back to Home</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
