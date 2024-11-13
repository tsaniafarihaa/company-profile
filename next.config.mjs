 /** @type {import('next').NextConfig} */
 const nextConfig = {
    images: {
      remotePatterns: [
    
        
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net', // Contentful's image CDN
          pathname: '/**',
        },

      ],
    },
  };
  
  export default nextConfig;