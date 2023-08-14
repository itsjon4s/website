'use client';

import Link from 'next/link';
import {
  EnvelopeSimple, GithubLogo, InstagramLogo,
} from 'phosphor-react';

const Socials = () => (
    <div className="text-4xl flex space-x-1">
      <Link href="https://www.instagram.com/_joao.mota_/">
        <InstagramLogo className="scale-100 text-white hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="https://github.com/itsjon4s">
        <GithubLogo className="scale-100 text-white hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="mailto:motajoao670@gmail.com">
        <EnvelopeSimple className="scale-100 text-white hover:scale-150 duration-300 cursor-pointer" />
      </Link>
    </div>
);

export default Socials;
