module.exports = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    transpilePackages: ["design-system"],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};
