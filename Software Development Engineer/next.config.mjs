/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images from anywhere (since user might not have specific domains yet)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
