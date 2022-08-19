import Link from 'next/link';

interface ErrorProps {
  code: number;
  message: string;
}

export default function Error(props: ErrorProps) {
  return (
    <div>
      <div className="flex-col text-center">
        <h1 className="font-bold text-5xl">{props.code}</h1>
        <p className="font-light text-2xl">{props.message}</p>
        <Link href="/">
          <a className="font-extralight text-xl">Back to Home</a>
        </Link>
      </div>
    </div>
  );
}
