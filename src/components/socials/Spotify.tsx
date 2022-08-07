import Link from 'next/link';
import { SpotifyLogo } from 'phosphor-react';

export default function Spotify() {
  return (
    <Link href="https://open.spotify.com/user/0obnn3etn7vr9mafxwc0cfbvl">
      <a>
        <SpotifyLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </a>
    </Link>
  );
}