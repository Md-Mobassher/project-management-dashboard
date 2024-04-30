/** @type {import('next').NextConfig} */
const nextConfig = {
  mages: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.stack.imgur.com",
      },
    ],
  },
};

export default nextConfig;
