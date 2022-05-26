/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movie/:path*",
        destination: `https://api.themoviedb.org/3/movie/:path*?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
