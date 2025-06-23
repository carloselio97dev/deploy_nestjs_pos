import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
        {
        protocol:'https',
        hostname: 'deploy-pos-nestjs-xi6a.onrender.com',
      },
      {
        protocol:'https',
        hostname:'res.cloudinary.com'
      }
    ]
  }
  
};

export default nextConfig;
