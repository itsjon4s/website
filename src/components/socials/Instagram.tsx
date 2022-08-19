import Link from 'next/link';
import { InstagramLogo } from 'phosphor-react';

export default function Instagram() {
  return (
    <Link href="/instagram">
      <a>
        <InstagramLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </a>
    </Link>
  );
}
