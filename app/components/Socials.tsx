'use client';

import Link from 'next/link';
import { EnvelopeSimple, GithubLogo, InstagramLogo, SpotifyLogo } from 'phosphor-react';

const Socials = () => {
  return (
    <div className="text-6xl text-center justify-center flex space-x-3">
      <Link href="https://www.instagram.com/_joao.mota_/">
        <InstagramLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="https://open.spotify.com/user/0obnn3etn7vr9mafxwc0cfbvl">
        <SpotifyLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="https://github.com/itsjon4s">
        <GithubLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="mailto:motajoao670@gmail.com">
        <EnvelopeSimple className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
    </div>
  );
};

export default Socials;
