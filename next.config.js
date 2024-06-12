const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: 'export',
  //   images: { unoptimized: true },
  reactStrictMode: false,
};

module.exports = withNextIntl(nextConfig);
