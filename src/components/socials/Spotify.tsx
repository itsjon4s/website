import Link from 'next/link';
import { SpotifyLogo } from 'phosphor-react';

export default function Spotify() {
  return (
    <Link href="/spotify">
      <a>
        <SpotifyLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </a>
    </Link>
  );
}
