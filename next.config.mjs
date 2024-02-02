/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.zillowstatic.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
