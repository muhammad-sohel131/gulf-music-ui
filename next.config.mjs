/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['i.ytimg.com'],
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://gulf.sardaritskillshare.com/api/:path*', // your API
            },
        ];
    },

};

export default nextConfig;
