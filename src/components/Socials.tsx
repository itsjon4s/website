import Link from "next/link";
import {
  GithubLogo,
  DiscordLogo,
  SpotifyLogo,
  EnvelopeSimple,
  InstagramLogo,
} from "phosphor-react";

const Github = () => {
  return (
    <Link href="https://github.com/itsjon4s">
      <a>
        <GithubLogo
          style={{
            cursor: "pointer",
          }}
        />
      </a>
    </Link>
  );
};

const Discord = () => {
  return (
    <Link href="https://discord.com/users/431768491759239211/">
      <a>
        <DiscordLogo
          style={{
            cursor: "pointer",
          }}
        />
      </a>
    </Link>
  );
};

const Spotify = () => {
  return (
    <Link href="https://open.spotify.com/user/0obnn3etn7vr9mafxwc0cfbvl">
      <a>
        <SpotifyLogo
          style={{
            cursor: "pointer",
          }}
        />
      </a>
    </Link>
  );
};

const Mail = () => {
  return (
    <Link href="mailto:motajoao670@gmail.com">
      <a>
        <EnvelopeSimple
          style={{
            cursor: "pointer",
          }}
        />
      </a>
    </Link>
  );
};

const Instagram = () => {
  return (
    <Link href="https://www.instagram.com/joao.mota___/">
      <a>
        <InstagramLogo
          style={{
            cursor: "pointer",
          }}
        />
      </a>
    </Link>
  );
};

export { Github, Discord, Spotify, Mail, Instagram };
