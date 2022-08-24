import { NextPage } from 'next';
import Link from 'next/link';

interface ErrorProps {
  code: number;
  message: string;
}

const Error: NextPage<ErrorProps> = (props: ErrorProps) => {
  return (
    <div>
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="font-bold text-7xl">{props.code}</h1>
        <p className="font-base text-4xl">{props.message}</p>
        <Link href="/">
          <a className="font-bold text-xl">Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
