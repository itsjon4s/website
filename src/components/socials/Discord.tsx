import Link from 'next/link';
import { DiscordLogo } from 'phosphor-react';

export default function Discord() {
  return (
    <Link href="/discord">
      <a>
        <DiscordLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer"/>
      </a>
    </Link>
  );
}