import Link from 'next/link';
import { GithubLogo, DiscordLogo, SpotifyLogo } from 'phosphor-react';

const Github = () => {
  return (
    <Link href="https://github.com/itsjon4s">
    <GithubLogo style={{
      cursor: 'pointer'
    }}/>
    </Link>
  )
}

const Discord = () => {
  return (
    <Link href="https://discord.com/users/431768491759239211/">
    <DiscordLogo style={{
      cursor: 'pointer'
    }}/>
    </Link>
  )
}

const Spotify = () => {
  return (
    <Link href="https://open.spotify.com/user/0obnn3etn7vr9mafxwc0cfbvl">
    <SpotifyLogo style={{
      cursor: 'pointer'
    }}/>
    </Link>
  )
}

export { Github, Discord, Spotify }