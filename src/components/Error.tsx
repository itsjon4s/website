import Link from 'next/link';

interface ErrorProps {
  code: number;
  message: string;
}

const Error = (props: ErrorProps) => {
  return (
    <div>
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="font-bold text-7xl text-[#8fcfd1]">{props.code}</h1>
        <p className="font-semibold text-4xl">{props.message}</p>
        <Link href="/">
          <a className="font-normal text-3xl text-[#8fcfd1]">Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
