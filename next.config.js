/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "cash-app-lp.vercel.app", "cash-app.singhlify.com"],
  },
};

module.exports = nextConfig;
