import Link from 'next/link';
import { GithubLogo } from 'phosphor-react';

export default function Github() {
  return (
    <Link href="/github">
      <a>
        <GithubLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </a>
    </Link>
  );
}
