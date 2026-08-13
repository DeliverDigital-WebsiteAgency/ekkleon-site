/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.ekkleon.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
