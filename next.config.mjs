/** @type {import('next').NextConfig} */
const nextConfig = {



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
