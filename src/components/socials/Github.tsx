import Link from 'next/link';
import { GithubLogo } from 'phosphor-react';

export default function Github() {
  return (
    <Link href="https://github.com/itsjon4s">
      <a>
        <GithubLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </a>
    </Link>
  );
}