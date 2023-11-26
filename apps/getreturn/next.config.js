module.exports = {
  reactStrictMode: true,
  transpilePackages: ["design-system"],
  images: {
    domains: ['getreturn.s3.eu-central-1.amazonaws.com'],
  },
  experimental: {
    serverActions: {
      allowedForwardedHosts: ['localhost', 'getreturn.pl', 'vercel.app'],
      allowedOrigins: ['http://localhost', 'https://www.getreturn.pl', 'https://vercel.app']
    },
  }
};
