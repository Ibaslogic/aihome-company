/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.zillowstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.sanity.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
