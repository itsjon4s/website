import Link from 'next/link';

interface ErrorProps {
  code: number;
  message: string;
}

const Error = (props: ErrorProps) => {
  return (
    <div>
      <div className="flex-col text-center">
        <h1 className="font-bold text-9xl text-[#8fcfd1]">{props.code}</h1>
        <p className="font-light text-4xl">{props.message}</p>
        <Link href="/">
          <a className="font-extralight text-3xl border-b-2 border-white">Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
