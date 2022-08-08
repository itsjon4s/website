/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/0obnn3etn7vr9mafxwc0cfbvl',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/itsjon4s',
        permanent: true
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/joao.mota___/',
        permanent: true
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/431768491759239211/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
