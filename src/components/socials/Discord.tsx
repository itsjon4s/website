import Link from 'next/link';
import { DiscordLogo } from 'phosphor-react';

export default function Discord() {
  return (
    <Link href="https://discord.com/users/431768491759239211/">
      <a>
        <DiscordLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer"/>
      </a>
    </Link>
  );
}