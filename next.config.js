const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: 'export',
  //   images: { unoptimized: true },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.timeweb.cloud',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
